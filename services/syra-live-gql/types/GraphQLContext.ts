import { PrismaClient } from '@prisma/client';
import { SessionUser } from './JwtPayload';
import { MailingService } from "../src/mailing/mailing.service";

export type GraphQLContext = {
  prisma: PrismaClient,
  user: SessionUser,
  mailingService: MailingService,
};