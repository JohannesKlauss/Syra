import { Controller, Get, Param, Post, Query, Req, Res, UseGuards } from "@nestjs/common";
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { CookieAuthGuard } from '../auth/cookie-auth.guard';
import { Multipart } from 'fastify-multipart';
import { FilesService } from '../files/files.service';
import { AudioTranscodeJob } from '../../types/AudioTranscodeJob';
import { PubSubService } from "../pub-sub/pub-sub.service";
import { Subscriptions } from "../../types/Subscriptions";

@Controller('audio')
export class AudioController {
  constructor(
    @InjectQueue('audio') private readonly audioQueue: Queue<AudioTranscodeJob>,
    private readonly filesService: FilesService,
    private readonly pubSubService: PubSubService,
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
    let spacesObject: { id: string; location: string; name: string };
    let mimeType: string;

    for await (const part of parts) {
      if (part.file) {
        const res = await this.filesService.upload(part, req.user.id, false);

        spacesObject = {
          ...res,
          name: part.filename,
        };

        mimeType = part.mimetype;

        break;
      }
    }

    console.log('MIME TYPE', mimeType);

    if (mimeType !== 'audio/x-m4a') {
      await this.audioQueue.add(
        'transcode',
        {
          spacesObject: spacesObject,
          targetFormat: 'm4a',
          projectId,
        },
        {
          removeOnComplete: true,
        },
      );
    } else {
      await this.pubSubService.getPubSub().publish(Subscriptions.UPLOADED_FILE_PROCESSED, {
        id: spacesObject.id,
        parentAssetId: '',
        projectId,
      });
    }

    return spacesObject;
  }
}
