import { Controller, Get, Post, Req, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { SpacesService } from './spaces.service';

@Controller('files')
export class FilesController {
  constructor(private spacesService: SpacesService) {
  }

  @Post('upload')
  async uploadFile(@Req() req) {
    const parts = await req.parts();

    for await (const part of parts) {
      if (part.file) {
        await this.spacesService.putFile(`userTest/sessionTest/mixdownTest/${part.filename}`, part.file);
      } else {
        console.log(part);
      }
    }

    return 'ok';
  }
}
