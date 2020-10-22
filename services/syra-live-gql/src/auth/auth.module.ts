import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SessionModule } from '../session/session.module';
import { SessionService } from '../session/session.service';
import { CookieStrategy } from './cookie.strategy';

@Module({
  imports: [
    PassportModule,
    SessionModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '3600s' },
      }),
      inject: [ConfigService]
    }),
  ],
  providers: [AuthService, PrismaService, SessionService, LocalStrategy, CookieStrategy],
  exports: [AuthService]
})
export class AuthModule {}
