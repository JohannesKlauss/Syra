import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailingService {
  constructor(private mailerService: MailerService, private configService: ConfigService) {
  }

  async sendPasswordRequest(email: string, name: string, token: string) {
    await this.mailerService.sendMail({
      to: email,
      from: 'admin@syra.live',
      subject: 'Reset Password',
      template: 'reset-password-request',
      context: {
        name,
        token,
      }
    });
  }

  async sendResetPassword(email: string, name: string, password: string) {
    await this.mailerService.sendMail({
      to: email,
      from: 'admin@syra.live',
      subject: 'Your new password',
      template: 'new-password',
      context: {
        name,
        password,
      }
    });
  }

  async sendSignUp(email: string, name: string, password: string) {
    await this.mailerService.sendMail({
      to: email,
      from: 'admin@syra.live',
      subject: 'Welcome to Syra',
      template: 'sign-up',
      context: {
        name,
        password,
        email,
      }
    });
  }
}
