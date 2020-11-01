import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CookieAuthGuard } from '../auth/cookie-auth.guard';

@Controller('chat')
export class ChatController {
  constructor(private chatService: ChatService) {}

  @Get('token')
  @UseGuards(CookieAuthGuard)
  async token(@Request() req) {
    const userToken = await this.chatService.issueToken(req.user.id);

    return { userToken };
  }
}
