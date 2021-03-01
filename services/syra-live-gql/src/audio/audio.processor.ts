import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { SpacesService } from '../files/spaces.service';
import { AudioTranscodeJob } from '../../types/AudioTranscodeJob';
import * as fs from 'fs';
import * as ffmpeg from 'fluent-ffmpeg';
import { pipeline } from 'stream';
import * as uniqid from 'uniqid';
import { PrismaService } from '../prisma/prisma.service';
import { MD5 } from 'crypto-js';

// TODO: THIS IS UGLY AS HELL AND ERROR PRONE. CLEAN THIS UP!

@Processor('audio')
export class AudioProcessor {
  constructor(private readonly spacesService: SpacesService, private readonly prismaService: PrismaService) {}

  private readonly logger = new Logger(AudioProcessor.name);

  @Process('transcode')
  async handleTranscode(job: Job<AudioTranscodeJob>) {
    this.logger.debug('Start transcoding...');
    this.logger.debug(job.data);

    const { spacesObject, targetFormat } = job.data;

    this.logger.debug('Pull info from DB');

    const originalAsset = await this.prismaService.audioAsset.findUnique({
      where: { id: spacesObject.id },
      select: { isPublic: true, owner: true, id: true },
    });

    this.logger.debug('Pull file from S3 space');

    const fileStream = await this.spacesService.getFile(spacesObject.location);

    if (!fs.existsSync(`${__dirname}/tmp`)) {
      fs.mkdirSync(`${__dirname}/tmp`);
    }

    const uniqTranscodeId = uniqid();

    const tmpDest = `${__dirname}/tmp/${uniqTranscodeId}${spacesObject.name}`;

    this.logger.debug(`Write file to ${tmpDest}`);

    pipeline(fileStream.stream, fs.createWriteStream(tmpDest), (error) => {
      this.logger.debug(`Finished writing`);

      if (error == null) {
        const transcoder = ffmpeg(tmpDest);
        const transcodedFilePath = tmpDest.replace('.wav', targetFormat === 'm4a' ? '.m4a' : '.mp3');

        this.logger.debug(`Run transcoder`);

        let uploadedFile = false;

        transcoder
          .toFormat('ipod')
          .withAudioCodec(targetFormat === 'm4a' ? 'alac' : 'libmp3lame')
          .saveToFile(transcodedFilePath)
          .on('end', async () => {
            this.logger.debug(`Transcoder finished`);

            if (!uploadedFile) {
              this.logger.debug(`Upload ${transcodedFilePath} to S3 space`);

              uploadedFile = true;

              const location = await this.spacesService.putFile(
                MD5(originalAsset.owner.id).toString(),
                spacesObject.name.replace('.wav', targetFormat === 'm4a' ? '.m4a' : '.mp3'),
                'audio/m4a',
                fs.createReadStream(transcodedFilePath),
                true,
              );

              this.logger.debug(`S3 Space location: ${location}`);

              await this.prismaService.audioAsset.create({
                data: {
                  isPublic: originalAsset.isPublic,
                  location,
                  parentAssetId: spacesObject.id,
                  userId: originalAsset.owner.id,
                  name: spacesObject.name.replace('.wav', targetFormat === 'm4a' ? '.m4a' : '.mp3'),
                }
              });

              fs.unlinkSync(tmpDest);
              fs.unlinkSync(transcodedFilePath);

              this.logger.debug('Cleaned up tmp folder.');
            }
          })
          .run();
      } else {
        this.logger.debug('Error while writing file');
        console.log(error);
      }
    });
  }
}
