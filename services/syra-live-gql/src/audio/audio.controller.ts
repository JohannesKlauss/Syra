import { Controller, Param, Post, Query, Req, UseGuards } from "@nestjs/common";
import { InjectQueue } from "@nestjs/bull";
import { Queue } from "bull";
import { CookieAuthGuard } from "../auth/cookie-auth.guard";
import { Multipart } from "fastify-multipart";
import { FilesService } from "../files/files.service";
import { AudioTranscodeJob } from "../../types/AudioTranscodeJob";

@Controller('audio')
export class AudioController {
  constructor(@InjectQueue('audio') private readonly audioQueue: Queue<AudioTranscodeJob>, private readonly filesService: FilesService) {}

  @Post('transcode/:projectId')
  @UseGuards(CookieAuthGuard)
  async upload(@Req() req, @Query() query, @Param('projectId') projectId) {
    const parts: Multipart[] = await req.parts();
    let spacesObject: {id: string, location: string, name: string};

    for await (const part of parts) {
      if (part.file) {
        const res = await this.filesService.upload(part, req.user.id, false);

        spacesObject = {
          ...res,
          name: part.filename,
        };

        break;
      }
    }

    await this.audioQueue.add('transcode', {
      spacesObject: spacesObject,
      targetFormat: 'm4a',
    });

    return spacesObject;
  }
}