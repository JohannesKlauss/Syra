import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { PrismaService } from '../prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      // TODO: FOR SOME REASON NEST.JS DOESN'T LOAD THE ENV VARS. HAVE TO FIGURE THAT OUT. CHANGE THAT KEY
      secret: process.env.PASSPORT_SECRET || 'NOT_VERY_SECRET',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, PrismaService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
