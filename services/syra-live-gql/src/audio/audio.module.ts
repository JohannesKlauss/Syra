import { BullModule } from '@nestjs/bull';
import { HttpModule, Module } from "@nestjs/common";
import { AudioController } from './audio.controller';
import { AudioProcessor } from './audio.processor';
import { FilesModule } from "../files/files.module";
import { FilesService } from "../files/files.service";
import { PrismaService } from "../prisma/prisma.service";
import { SpacesService } from "../files/spaces.service";
import { PubSubModule } from "../pub-sub/pub-sub.module";
import { OpenFaasService } from "../open-faas/open-faas.service";
import { OpenFaasModule } from "../open-faas/open-faas.module";

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'audio',
    }),
    FilesModule,
    PubSubModule,
    OpenFaasModule,
    HttpModule,
  ],
  controllers: [AudioController],
  providers: [AudioProcessor, FilesService, PrismaService, SpacesService, OpenFaasService],
})
export class AudioModule {}