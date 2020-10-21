import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { RedisModule } from 'nestjs-redis';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    RedisModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        host: 'localhost',
        port: 6379,
        password: configService.get('LIVE_SESSION_DB_PASSWORD'),
        db: 0
      }),
      inject:[ConfigService]
    }),
  ],
  providers: [SessionService]
})
export class SessionModule {}
