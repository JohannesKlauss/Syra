import { hash } from 'bcrypt';
import * as TypeGraphQL from 'type-graphql';
import { FeedItem, User } from '../../../../../prisma/generated/type-graphql/models';
import { SignUpUserArgs } from './Args/SignUpUserArgs';
import { GraphQLContext } from '../../../../../types/GraphQLContext';
import { BadRequestException } from '@nestjs/common';
import { Role } from '../../../../../prisma/generated/type-graphql/enums';
import { Int } from 'type-graphql';

@TypeGraphQL.Resolver(_of => User)
export class CustomUserResolver {
  @TypeGraphQL.FieldResolver(type => Int, { nullable: true })
  async followedByCount(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: GraphQLContext): Promise<number> {
    return ctx.prisma.user.count({ where: { following: { some: { id: user.id } } } });
  }

  @TypeGraphQL.FieldResolver(type => Int, { nullable: true })
  async followingCount(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: GraphQLContext): Promise<number> {
    return ctx.prisma.user.count({ where: { followedBy: { some: { id: user.id } } } });
  }

  @TypeGraphQL.Authorized([Role.USER])
  @TypeGraphQL.Query(_returns => User, {
    nullable: false,
    description: undefined,
  })
  async me(@TypeGraphQL.Ctx() ctx: GraphQLContext): Promise<User | null> {
    return ctx.prisma.user.findOne({ where: { id: ctx.user.id } });
  }

  @TypeGraphQL.Mutation(_returns => User, {
    nullable: false,
    description: undefined,
  })
  async signUpUser(@TypeGraphQL.Ctx() ctx: GraphQLContext, @TypeGraphQL.Args() args: SignUpUserArgs): Promise<User> {
    const { data: { password, name, email, accessCode } } = args;

    const dbEntry = await ctx.prisma.user.findOne({ where: { email: email }, select: { id: true } });

    if (dbEntry) {
      throw new BadRequestException('Email is already taken.');
    }

    const code = await ctx.prisma.earlyAccessCode.findOne({
      where: { code: accessCode },
      select: { id: true, isValid: true },
    });

    if (code === null || !code.isValid) {
      throw new BadRequestException('Please provide a valid early access code.');
    }

    const hashedPassword = await hash(password, 11);

    const user = await ctx.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    if (user) {
      await ctx.prisma.earlyAccessCode.update({
        where: { id: code.id },
        data: { isValid: false, claimedBy: { connect: { id: user.id } } },
      });
    }

    return user;
  }
}
