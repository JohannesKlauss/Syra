import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { User } from '../../../prisma/generated/type-graphql/models';
import { Context } from '../../types/context';
import { SignUpUserLocalInput } from './inputs/SignUpUserLocalInput';
import { HttpException, HttpStatus } from '@nestjs/common';
import bcrypt from 'bcrypt';

@Resolver(of => User)
export class SignUpUserResolver {
  @Mutation(returns => User, { nullable: true })
  async createLocalUser(@Arg('data') newUserData: SignUpUserLocalInput, @Ctx() { prisma }: Context): Promise<User | null> {
    const { email, password, name } = newUserData;

    const mailTaken = await prisma.user.findOne({
      where: { email },
    });

    const nameTaken = await prisma.user.findOne({
      where: { name },
    });

    if (mailTaken !== null) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Email is already taken',
      }, HttpStatus.BAD_REQUEST);
    }

    if (nameTaken !== null) {
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: 'Name is already taken',
      }, HttpStatus.BAD_REQUEST);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const { id } = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        createdAt: new Date(),
        lastOnline: new Date(),
      },
      select: {
        id: true,
      },
    });

    return await prisma.user.findOne({
      where: { id },
    });
  }
}