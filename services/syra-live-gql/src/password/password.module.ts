import { Module } from "@nestjs/common";
import { PrismaService } from "../prisma.service";
import { PasswordController } from "./password.controller";
import { PasswordService } from "./password.service";
import { MailingModule } from "../mailing/mailing.module";
import { DynamicRedisModule } from "../redis/redis.module";

@Module({
  imports: [
    DynamicRedisModule,
    MailingModule
  ],
  providers: [PrismaService, PasswordService],
  controllers: [PasswordController]
})
export class PasswordModule {
}
