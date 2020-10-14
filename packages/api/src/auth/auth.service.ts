import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import bcrypt from "bcrypt";
import { JwtService } from '@nestjs/jwt';
import { User } from 'prisma/generated/type-graphql';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {
  }

  async validateUser(email: string, plainTextPassword: string): Promise<Partial<User> | null> {
    const user = await this.prisma.user.findOne({
      where: {
        email
      }
    });

    if (user) {
      const { password, ...result } = user;
      const isPasswordCorrect = await bcrypt.compare(plainTextPassword, password);

      return isPasswordCorrect ? result : null;
    }

    return null;
  }

  login(user: User) {
    const payload = { username: user.name, id: user.id, tier: user.tier };

    return `Authentication=${this.jwtService.sign(payload, {
      secret: process.env.PASSPORT_SECRET || 'NOT_VERY_SECRET'
    })}; HttpOnly; Path=/; Max-Age=3600s`;
  }
}
