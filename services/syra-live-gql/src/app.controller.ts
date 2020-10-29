import { Controller, Get, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { CookieAuthGuard } from './auth/cookie-auth.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login/local')
  async login(@Request() req) {
    const session = await this.authService.login(req.user);

    console.log('session', session);

    req.session.set('sessionId', session);

    console.log('set session');

    return { message: 'ok' };
  }

  @UseGuards(CookieAuthGuard)
  @Get('auth/logout')
  async logout(@Request() req) {
    const sessionId = await req.session.get('sessionId');

    await this.authService.logout(sessionId);
    await req.session.delete('sessionId');

    return { message: 'ok' };
  }
}
