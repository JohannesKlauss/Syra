import { Injectable } from '@nestjs/common';
import { RedisService } from "nestjs-redis";
import { StreamChat } from "stream-chat";
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

    let token = await client.get(userId);

    if (!token) {
      const streamChat = new StreamChat(this.configService.get('STREAM_CHAT_KEY'), this.configService.get('STREAM_CHAT_SECRET'));

      token = streamChat.createToken(userId);

      await client.set(userId, token);
    }

    return token;
  }
}
