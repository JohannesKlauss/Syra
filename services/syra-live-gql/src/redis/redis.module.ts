import { DynamicModule } from '@nestjs/common';
import { RedisModule, RedisModuleOptions } from 'nestjs-redis';
import { ConfigModule, ConfigService } from '@nestjs/config';

const baseOptions = {
  port: 6379,
}

export const DynamicRedisModule: DynamicModule = RedisModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService): RedisModuleOptions[] => {
    return [
      {
        ...baseOptions,
        password: configService.get('REDIS_PASSWORD'),
        host: configService.get('REDIS_HOST'),
        db: 0,
        name: 'syra-session'
      },
      {
        ...baseOptions,
        password: configService.get('REDIS_PASSWORD'),
        host: configService.get('REDIS_HOST'),
        db: 1,
        name: 'syra-password-reset'
      },
      {
        ...baseOptions,
        password: configService.get('REDIS_PASSWORD'),
        host: configService.get('REDIS_HOST'),
        db: 2,
        name: 'syra-chat-token'
      },
      {
        ...baseOptions,
        password: configService.get('REDIS_PASSWORD'),
        host: configService.get('REDIS_HOST'),
        db: 3,
        name: 'syra-publisher'
      },
      {
        ...baseOptions,
        password: configService.get('REDIS_PASSWORD'),
        host: configService.get('REDIS_HOST'),
        db: 4,
        name: 'syra-subscriber'
      },
      {
        ...baseOptions,
        password: configService.get('REDIS_PASSWORD'),
        host: configService.get('REDIS_HOST'),
        db: 5,
        name: 'syra-bull-queue'
      }
    ];
  },
});