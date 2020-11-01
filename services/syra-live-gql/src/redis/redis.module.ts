import { DynamicModule } from '@nestjs/common';
import { RedisModule, RedisModuleOptions } from 'nestjs-redis';
import { ConfigModule, ConfigService } from '@nestjs/config';

const baseOptions = {
  host: 'local.syra.live',
  port: 6379,
}

export const DynamicRedisModule: DynamicModule = RedisModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService): RedisModuleOptions[] => {
    return [
      {
        ...baseOptions,
        password: configService.get('LIVE_SESSION_DB_PASSWORD'),
        db: 0,
        name: 'syra-session'
      },
      {
        ...baseOptions,
        password: configService.get('LIVE_SESSION_DB_PASSWORD'),
        db: 1,
        name: 'syra-password-reset'
      },
      {
        ...baseOptions,
        password: configService.get('LIVE_SESSION_DB_PASSWORD'),
        db: 2,
        name: 'syra-chat-token'
      }
    ];
  },
});