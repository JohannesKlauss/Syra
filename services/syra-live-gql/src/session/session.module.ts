import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { DynamicRedisModule } from '../redis/redis.module';

@Module({
  imports: [DynamicRedisModule],
  providers: [SessionService],
  exports: [SessionService]
})
export class SessionModule {}
