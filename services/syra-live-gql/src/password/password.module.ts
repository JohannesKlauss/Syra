import { Module } from "@nestjs/common";
import { PasswordController } from "./password.controller";
import { PasswordService } from "./password.service";
import { MailingModule } from "../mailing/mailing.module";
import { DynamicRedisModule } from "../redis/redis.module";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [
    DynamicRedisModule,
    MailingModule,
    PrismaModule
  ],
  providers: [PasswordService],
  controllers: [PasswordController]
})
export class PasswordModule {
}
