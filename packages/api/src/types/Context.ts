import { PrismaClient } from '@prisma/client';
import { JwtPayload } from './JwtPayload';

export interface Context {
  prisma: PrismaClient;
  user: JwtPayload;
}