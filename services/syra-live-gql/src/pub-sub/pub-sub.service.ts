import { Injectable } from '@nestjs/common';
import { RedisPubSub } from "graphql-redis-subscriptions";
import { RedisService } from "nestjs-redis";

@Injectable()
export class PubSubService {
  private static pubSub: RedisPubSub;

  constructor(private redisService: RedisService) {
    if (PubSubService.pubSub == null) {
      PubSubService.pubSub = new RedisPubSub({
        // @ts-ignore
        publisher: redisService.getClient('syra-publisher'),
        // @ts-ignore
        subscriber: redisService.getClient('syra-subscriber'),
      });
    }
  }

  getPubSub(): RedisPubSub {
    return PubSubService.pubSub;
  }
}
