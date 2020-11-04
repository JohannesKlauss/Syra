import { PrismaClient } from '@prisma/client';
import { SessionUser } from './JwtPayload';

export type GraphQLContext = {
  prisma: PrismaClient,
  user: SessionUser,
};