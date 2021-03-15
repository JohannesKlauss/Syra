import { Controller, Get, Param, Post, Query, Req, Res, UseGuards } from "@nestjs/common";
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { CookieAuthGuard } from '../auth/cookie-auth.guard';
import { Multipart } from 'fastify-multipart';
import { FilesService } from '../files/files.service';
import { AudioTranscodeJob } from '../../types/AudioTranscodeJob';
import * as uniqid from 'uniqid';
import * as fs from "fs";

@Controller('audio')
export class AudioController {
  constructor(
    @InjectQueue('audio') private readonly audioQueue: Queue<AudioTranscodeJob>,
    private readonly filesService: FilesService,
  ) {}

  @Get(':assetId')
  @UseGuards(CookieAuthGuard)
  async get(@Req() req, @Res() res, @Query() query, @Param('assetId') assetId) {
    const result = await this.filesService.get(assetId, req.user.id);

    res.type(result.mimeType);
    res.send(result.stream);
  }

  @Post('transcode/:projectId')
  @UseGuards(CookieAuthGuard)
  async upload(@Req() req, @Query() query, @Param('projectId') projectId) {
    const parts: Multipart[] = await req.parts();
    let jobId: string = uniqid();

    for await (const part of parts) {
      if (part.file) {
        const tmpFileName = `audio-transcode-${jobId}`;

        if (!fs.existsSync(`${__dirname}/tmp`)) {
          fs.mkdirSync(`${__dirname}/tmp`);
        }

        part.file.pipe(fs.createWriteStream(`${__dirname}/tmp/${tmpFileName}`)).on('finish', () => {
          this.audioQueue.add(
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
        })

        break;
      }
    }

    return {jobId};
  }
}
