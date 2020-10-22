import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
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

    console.log('set value', session);
    req.session.set('sessionId', session);

    return { message: 'ok' };
  }

  @UseGuards(CookieAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    console.log('SessionId', await req.session.get('sessionId'));

    return req.user;
  }
}
