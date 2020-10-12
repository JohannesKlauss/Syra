import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import bcrypt from "bcrypt";
import { User } from '../../prisma/generated/type-graphql/models';
import { JwtService } from '@nestjs/jwt';

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

  async login(user: User) {
    const payload = { username: user.name, sub: user.id, tier: user.tier };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
