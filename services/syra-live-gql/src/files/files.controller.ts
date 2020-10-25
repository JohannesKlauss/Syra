import { Controller, Get, Post, Request, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { SpacesService } from './spaces.service';

@Controller('files')
export class FilesController {
  constructor(private spacesService: SpacesService) {
  }

  @Post('upload')
  uploadFile(@Request() req) {
    console.log(req.multipart());

    return 'ok';
  }
}
