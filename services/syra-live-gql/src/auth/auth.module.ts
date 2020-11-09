import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SessionModule } from '../session/session.module';
import { SessionService } from '../session/session.service';
import { CookieStrategy } from './cookie.strategy';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [
    PassportModule,
    SessionModule,
    PrismaModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '7d' },
      }),
      inject: [ConfigService]
    }),
  ],
  providers: [AuthService, SessionService, LocalStrategy, CookieStrategy],
  exports: [AuthService, CookieStrategy]
})
export class AuthModule {}
