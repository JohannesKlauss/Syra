import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';

@Injectable()
export class SessionService {
  constructor(private redisService: RedisService) {
  }

  private async getClient() {
    return this.redisService.getClient('syra-session');
  }

  async setToken(sessionId: string, jwtToken: string) {
    const client = await this.getClient();

    await client.set(sessionId, jwtToken);
  }

  async getToken(sessionId: string) {
    const client = await this.getClient();

    return await client.get(sessionId);
  }

  async removeToken(sessionId: string) {
    const client = await this.getClient();

    return await client.del(sessionId);
  }
}
