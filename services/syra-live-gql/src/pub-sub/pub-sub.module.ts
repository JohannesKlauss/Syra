import { Module } from '@nestjs/common';
import { PubSubService } from './pub-sub.service';
import { DynamicRedisModule } from "../redis/redis.module";

@Module({
  imports: [DynamicRedisModule],
  providers: [PubSubService],
  exports: [PubSubService]
})
export class PubSubModule {}
