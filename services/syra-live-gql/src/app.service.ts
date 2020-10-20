import {Injectable} from '@nestjs/common';
import {PrismaService} from "./prisma.service";

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) {
  }

  async create(): Promise<{ id: string }> {
    return await this.prismaService.user.create({
      data: {
        email: 'klauss.johannes@gmail.com',
        name: 'Johannes Klauss'
      },
      select: {
        id: true
      }
    });
  }

  async getHello(): Promise<{name: string}> {
    return await this.prismaService.user.findOne({where: {id: "ckggesu6v00022tqs5rgkqi3l"}, select: {name: true}});
  }
}
