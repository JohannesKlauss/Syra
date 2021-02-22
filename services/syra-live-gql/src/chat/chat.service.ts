import { Injectable } from '@nestjs/common';
import { RedisService } from "nestjs-redis";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class ChatService {
  constructor(private redisService: RedisService, private configService: ConfigService) {
  }

  private async getRedisClient() {
    return this.redisService.getClient('syra-chat-token');
  }

  async issueToken(userId: string) {
    const client = await this.getRedisClient();

    return await client.get(userId);
  }
}
