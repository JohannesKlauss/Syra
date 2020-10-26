import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { SpacesService } from './spaces.service';
import { Multipart } from 'fastify-multipart';
import { MD5 } from 'crypto-js';

@Injectable()
export class FilesService {
  constructor(private prismaService: PrismaService, private spacesService: SpacesService) {
  }

  async upload(file: Multipart, userId: string, isPublic: boolean = false) {
    const location = await this.uploadFile(file, MD5(userId).toString(), isPublic);

    return await this.prismaService.audioAsset.create({
      select: {
        id: true,
        location: true,
      },
      data: {
        location,
        isPublic,
        name: file.filename,
        owner: { connect: { id: userId } },
      },
    });
  }

  async get(assetId: string, userId: string) {
    const asset = await this.prismaService.audioAsset.findOne({
      where: { id: assetId },
      select: { owner: { select: { id: true } }, location: true },
    });

    if (asset.owner.id === userId) {
      return await this.spacesService.getFile(asset.location.replace(/(.+).com\/([a-zA-Z0-9\/]+)$/, '$2'));
    } else {
      throw new UnauthorizedException('You are not allowed to view this file.');
    }
  }

  private async uploadFile(file: Multipart, folder: string, isPublic: boolean = false) {
    return await this.spacesService.putFile(folder, file.filename, file.mimetype, file.file, isPublic);
  }
}
