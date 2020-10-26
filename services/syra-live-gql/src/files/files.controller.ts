import { Controller, Get, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Multipart } from 'fastify-multipart';
import { FilesService } from './files.service';
import { CookieAuthGuard } from '../auth/cookie-auth.guard';

@Controller('files')
export class FilesController {
  constructor(private filesServices: FilesService) {
  }

  @Post('upload')
  @UseGuards(CookieAuthGuard)
  async upload(@Req() req) {
    const parts: Multipart[] = await req.parts();
    const ids: Array<{id: string, location: string, name: string}> = [];

    for await (const part of parts) {
      if (part.file) {
        const res = await this.filesServices.upload(part, req.user.id);

        ids.push({
          ...res,
          name: part.filename,
        });
      }
    }

    return ids;
  }

  @Get(':id')
  @UseGuards(CookieAuthGuard)
  async getFile(@Req() req, @Param('id') id, @Res() res) {
    const result = await this.filesServices.get(id, req.user.id);

    res.type(result.mimeType);
    res.send(result.stream);
  }
}
