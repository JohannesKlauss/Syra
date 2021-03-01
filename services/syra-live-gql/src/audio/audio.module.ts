import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { AudioController } from './audio.controller';
import { AudioProcessor } from './audio.processor';
import { FilesModule } from "../files/files.module";
import { FilesService } from "../files/files.service";
import { PrismaService } from "../prisma/prisma.service";
import { SpacesService } from "../files/spaces.service";

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'audio',
    }),
    FilesModule,
  ],
  controllers: [AudioController],
  providers: [AudioProcessor, FilesService, PrismaService, SpacesService],
})
export class AudioModule {}