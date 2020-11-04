import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { DynamicRedisModule } from "../redis/redis.module";

@Module({
  imports: [
    DynamicRedisModule
  ],
  providers: [ChatService],
  controllers: [ChatController]
})
export class ChatModule {}
