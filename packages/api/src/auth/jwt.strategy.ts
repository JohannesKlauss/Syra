import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { JwtPayload } from '../types/JwtPayload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([req => req.cookies.Authentication || null]),
      ignoreExpiration: false,
      secretOrKey: process.env.PASSPORT_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    return { id: payload.id, name: payload.name };
  }
}