import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { ConfigService } from '@nestjs/config';
import { SpacesService } from './spaces.service';
import { FilesController } from './files.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  providers: [FilesService, ConfigService, SpacesService],
  exports: [FilesService],
  controllers: [FilesController],
})
export class FilesModule {}
