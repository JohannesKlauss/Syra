import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { SpacesService } from './spaces.service';

@Injectable()
export class FilesService {
  constructor(private prismaService: PrismaService, private spacesService: SpacesService) {
  }
}
