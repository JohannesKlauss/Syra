import { Controller, Get, Post, Request, Response, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { JwtRequest } from './types/JwtRequest';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login/local')
  async login(@Request() req, @Response() res) {
    const cookie = this.authService.login(req.user);

    res.header('Set-Cookie', cookie);

    return res.send({message: 'success'});
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req: JwtRequest) {
    return req.user;
  }

  @Get('version')
  getVersion() {
    return {
      name: require('../../package.json').name,
      version: require('../../package.json').version
    };
  }
}
