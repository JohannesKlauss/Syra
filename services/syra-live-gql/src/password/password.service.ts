import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import { RedisService } from 'nestjs-redis';
import { MD5 } from 'crypto-js';
import * as uniqid from 'uniqid';
import { MailingService } from '../mailing/mailing.service';
import { generate } from 'generate-password';
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PasswordService {
  constructor(
    private prismaService: PrismaService,
    private redisService: RedisService,
    private mailingService: MailingService,
  ) {}

  private async getRedisClient() {
    return this.redisService.getClient('syra-password-reset');
  }

  async updatePassword(userId: string, currentPassword: string, newPassword: string, confirmNewPassword: string) {
    if (newPassword !== confirmNewPassword) {
      throw new BadRequestException('New password is not identical to confirmation password.');
    }

    const { password } = await this.prismaService.user.findUnique({
      where: { id: userId },
      select: { password: true },
    });

    const isCurrentPasswordValid = compare(currentPassword, password);

    if (!isCurrentPasswordValid) {
      throw new UnauthorizedException();
    }

    const hashedPassword = await hash(newPassword, 11);

    await this.prismaService.user.update({
      where: { id: userId },
      data: { password: hashedPassword },
    });
  }

  async requestResetPassword(email: string) {
    const user = await this.prismaService.user.findUnique({ where: { email }, select: { id: true, name: true } });

    if (!user) {
      return;
    }

    const client = await this.getRedisClient();
    const token = MD5(uniqid()).toString();

    await client.set(token, email, 'ex', 1800);
    await this.mailingService.sendPasswordRequest(email, user.name, token);
  }

  async resetPassword(token: string) {
    const client = await this.getRedisClient();
    const email = await client.get(token);

    if (!email) {
      throw new NotFoundException('Link is not valid anymore.');
    }

    const clearPassword = generate();
    const password = await hash(clearPassword, 11);

    const user = await this.prismaService.user.update({
      where: { email },
      data: { password },
      select: { name: true },
    });

    await client.del(token);

    await this.mailingService.sendResetPassword(email, user.name, clearPassword);

    return !user;
  }
}
