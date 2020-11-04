import { Controller, Post, Body, UseGuards, Req, Get, Param } from '@nestjs/common';
import { CookieAuthGuard } from '../auth/cookie-auth.guard';
import { PasswordService } from './password.service';

type TChangePasswordPayload = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

@Controller('password')
export class PasswordController {
  constructor(private passwordService: PasswordService) {}

  @Post('update')
  @UseGuards(CookieAuthGuard)
  async upload(@Req() req, @Body() { currentPassword, confirmNewPassword, newPassword }: TChangePasswordPayload) {
    await this.passwordService.updatePassword(req.user.id, currentPassword, newPassword, confirmNewPassword);

    return { message: 'ok' };
  }

  @Post('reset')
  async requestReset(@Body() { email }: { email: string }) {
    await this.passwordService.requestResetPassword(email);

    return { message: 'ok' };
  }

  @Get('reset/:token')
  async reset(@Param('token') token) {
    await this.passwordService.resetPassword(token);

    return { message: 'ok' };
  }
}
