import { Module } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { PasswordController } from "./password.controller";
import { DynamicRedisModule } from "../redis/redis.module";
import { PasswordService } from "./password.service";
import { MailingModule } from "../mailing/mailing.module";

@Module({
  imports: [DynamicRedisModule, MailingModule],
  providers: [PrismaService, PasswordService],
  controllers: [PasswordController]
})
export class PasswordModule {
}
