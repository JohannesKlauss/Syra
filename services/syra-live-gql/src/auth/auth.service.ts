import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../prisma/generated/type-graphql/models';
import { SessionService } from '../session/session.service';
import uniqid from 'uniqid';
import { JwtPayload } from '../../types/JwtPayload';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
    private sessionService: SessionService,
  ) {}

  async validateUser(email: string, password: string): Promise<Pick<User, 'id' | 'role'> | null> {
    const user = await this.prismaService.user.findUnique({
      where: { email: email },
      select: { id: true, role: true, password: true },
    });

    if (user === null) {
      throw new UnauthorizedException('Wrong Email or Password');
    }

    const isPasswordValid = await compare(password, user.password);

    if (isPasswordValid) {
      const { password, ...result } = user;

      return result;
    }

    throw new UnauthorizedException('Wrong Email or Password');
  }

  async login(user: User) {
    // @ts-ignore TODO: THIS IS A BUG IN TYPEGRAPHQL. REMOVE ONCE FIXED.
    const payload: JwtPayload = { name: user.name, role: user.role, id: user.id };
    const sessionId = uniqid();
    const token = this.jwtService.sign(payload);

    await this.sessionService.setToken(sessionId, token);

    return sessionId;
  }

  async logout(sessionId: string, userId: string) {
    await this.prismaService.user.update({ where: { id: userId }, data: { isOnline: false } });
    await this.sessionService.removeToken(sessionId);
  }
}
