import { DynamicModule } from '@nestjs/common';
import { RedisModule, RedisModuleOptions } from 'nestjs-redis';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const DynamicRedisModule: DynamicModule = RedisModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService): RedisModuleOptions => {
    return {
      host: 'localhost',
      port: 6379,
      password: configService.get('LIVE_SESSION_DB_PASSWORD'),
      db: 0,
      name: 'syra-session'
    };
  },
});