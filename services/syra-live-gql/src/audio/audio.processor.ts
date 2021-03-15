import { Process, Processor } from '@nestjs/bull';
import { HttpService, Logger } from '@nestjs/common';
import { Job } from 'bull';
import { SpacesService } from '../files/spaces.service';
import { AudioTranscodeJob } from '../../types/AudioTranscodeJob';
import * as fs from 'fs';
import * as ffmpeg from 'fluent-ffmpeg';
import { pipeline } from 'stream';
import { PrismaService } from '../prisma/prisma.service';
import { MD5 } from 'crypto-js';
import { PubSubService } from '../pub-sub/pub-sub.service';
import { Subscriptions } from '../../types/Subscriptions';

// TODO: THIS IS UGLY AS HELL AND ERROR PRONE. CLEAN THIS UP!

@Processor('audio')
export class AudioProcessor {
  constructor(
    private readonly spacesService: SpacesService,
    private readonly prismaService: PrismaService,
    private readonly pubSubService: PubSubService,
    private readonly httpService: HttpService,
  ) {}

  private readonly logger = new Logger(AudioProcessor.name);

  @Process('transcode')
  async handleTranscode(job: Job<AudioTranscodeJob>) {
    this.logger.debug('Start transcoding...');
    this.logger.debug(job.data);

    const { spacesObject, targetFormat, projectId } = job.data;

    this.logger.debug('Pull info from DB');

    const originalAsset = await this.prismaService.audioAsset.findUnique({
      where: { id: spacesObject.id },
      select: { isPublic: true, owner: true, id: true },
    });

    this.logger.debug('Pull file from S3 space');

    const fileStream = await this.spacesService.getFile(spacesObject.location);

    this.logger.debug(`Run transcoder`);

    const response = await this.httpService.post('https://faas.syra.live/function/ffmpeg', fileStream.stream, {
      headers: { 'Content-Type': 'text/plain' },
      responseType: 'stream',
    }).toPromise();

    this.logger.debug(`Transcoder finished`);

    this.logger.debug(`Upload transcoded file`);

    const location = await this.spacesService.putFile(
      MD5(originalAsset.owner.id).toString(),
      spacesObject.name.replace(/\.[0-9a-z]+$/i, `.${targetFormat}`),
      'audio/flac',
      response.data,
      true,
    );

    this.logger.debug(`S3 Space location: ${location}`);

    const createdAsset = await this.prismaService.audioAsset.create({
      data: {
        isPublic: originalAsset.isPublic,
        location,
        parentAssetId: spacesObject.id,
        userId: originalAsset.owner.id,
        usedInProjects: { create: { projectId } },
        name: spacesObject.name.replace(/\.[0-9a-z]+$/i, `.${targetFormat}`),
      },
      select: {
        id: true,
      },
    });

    await this.pubSubService.getPubSub().publish(Subscriptions.UPLOADED_FILE_PROCESSED, {
      id: createdAsset.id,
      parentAssetId: originalAsset.id,
      projectId,
    });

    this.logger.debug('Published sub.');
  }
}
