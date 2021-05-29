import { Controller, Logger, Param, Post, Query, Req, UseGuards } from "@nestjs/common";
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { CookieAuthGuard } from '../auth/cookie-auth.guard';
import { Multipart } from 'fastify-multipart';
import { AudioTranscodeJob } from '../../types/AudioTranscodeJob';
import * as fs from "fs";
import uniqid from 'uniqid';

@Controller('audio')
export class AudioController {
  protected readonly logger = new Logger(AudioController.name);

  constructor(
    @InjectQueue('audio') private readonly audioQueue: Queue<AudioTranscodeJob>,
  ) {}

  @Post('transcode/:projectId')
  @UseGuards(CookieAuthGuard)
  async upload(@Req() req, @Query() query, @Param('projectId') projectId) {
    const parts: Multipart[] = await req.parts();
    let jobId: string = uniqid();

    this.logger.debug(`Set job id: ${jobId}`);

    for await (const part of parts) {
      if (part.file) {
        const tmpFileName = `audio-transcode-${jobId}`;

        this.logger.debug(`tmpFileName: ${tmpFileName}`);

        if (!fs.existsSync(`${__dirname}/tmp`)) {
          this.logger.debug(`tmp folder does not exist. Create...`);

          try {
            fs.mkdirSync(`${__dirname}/tmp`);
          } catch (e) {
            this.logger.error('Cannot create tmp directory.');
            this.logger.error(e);
          }
        }

        this.logger.debug(`Write file to tmp folder`);

        part.file.pipe(fs.createWriteStream(`${__dirname}/tmp/${tmpFileName}`)).on('finish', async () => {
          this.logger.debug(`Add to queue`);

          try {
            await this.audioQueue.add(
              'transcode',
              {
                jobId,
                originalMimeType: part.mimetype,
                originalName: part.filename,
                userId: req.user.id,
                projectId,
                tmpFileName,
              },
              {
                removeOnComplete: true,
              },
            );
          } catch (e) {
            this.logger.error(`Cannot add job to queue`);
            this.logger.error(e);
          }
        });

        break;
      }
    }

    return {jobId};
  }
}
