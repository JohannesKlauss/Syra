import { PrismaClient } from '@prisma/client';
import { Request } from '@nestjs/common';

export interface Context {
  prisma: PrismaClient;
  req: Request;
}