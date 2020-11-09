import { Strategy } from 'passport-cookie';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from "@nestjs/common";
import { SessionService } from '../session/session.service';
import { CookieKeys } from '../../types/CookieKeys';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../../types/JwtPayload';
import { HttpAdapterHost } from "@nestjs/core";

@Injectable()
export class CookieStrategy extends PassportStrategy(Strategy) {
  constructor(private jwtService: JwtService, private sessionService: SessionService, private adapterHost: HttpAdapterHost) {
    super({
      cookieName: CookieKeys.Session, // This is probably not even needed since fastify-secure-session is taking care of the cookie name.
      passReqToCallback: true,
    });
  }

  async validate(req): Promise<JwtPayload | null> {
    const sessionId = await req.session.get('sessionId');
    const jwt = await this.sessionService.getToken(sessionId);

    if (jwt === null) {
      return null;
    }

    return await this.jwtService.verify(jwt);
  }

  async validateSubscription(cookieSessionKey: string): Promise<JwtPayload | null> {
    const adapterInstance = this.adapterHost.httpAdapter.getInstance();
    const session = adapterInstance.decodeSecureSession(cookieSessionKey);

    if (session === null ) {
      return null;
    }

    const jwt = await this.sessionService.getToken(session.get('sessionId'));

    if (jwt === null) {
      return null;
    }

    return await this.jwtService.verify(jwt);
  }
}