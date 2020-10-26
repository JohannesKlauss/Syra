import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { SpacesService } from './spaces.service';
import { Multipart } from 'fastify-multipart';
import { MD5 } from 'crypto-js';

@Injectable()
export class FilesService {
  constructor(private prismaService: PrismaService, private spacesService: SpacesService) {
  }

  async upload(file: Multipart, userId: string) {
    const location = await this.uploadFile(file, MD5(userId).toString());

    return await this.prismaService.audioAsset.create({
      select: {
        id: true,
        location: true,
      },
      data: {
        location,
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
      console.log('filename', asset.location.replace(/(.+).com\/([a-zA-Z0-9\/]+)$/, '$2'));

      return await this.spacesService.getFile(asset.location.replace(/(.+).com\/([a-zA-Z0-9\/]+)$/, '$2'));
    }
  }

  private async uploadFile(file: Multipart, folder: string) {
    return await this.spacesService.putFile(folder, file.filename, file.mimetype, file.file);
  }
}
