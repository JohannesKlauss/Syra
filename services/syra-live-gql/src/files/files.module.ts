import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { ConfigService } from '@nestjs/config';
import { SpacesService } from './spaces.service';
import { FilesController } from './files.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [FilesService, ConfigService, SpacesService, PrismaService],
  exports: [FilesService],
  controllers: [FilesController],
})
export class FilesModule {}
