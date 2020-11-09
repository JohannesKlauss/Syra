import { hash } from 'bcrypt';
import * as TypeGraphQL from 'type-graphql';
import { User } from '../../../../../prisma/generated/type-graphql/models';
import { SignUpUserArgs } from './Args/SignUpUserArgs';
import { GraphQLContext } from '../../../../../types/GraphQLContext';
import { BadRequestException } from '@nestjs/common';
import { Role } from '../../../../../prisma/generated/type-graphql/enums';
import { Int, Publisher, ResolverFilterData } from 'type-graphql';
import knuthShuffle from '../../../../helpers/knuthShuffle';
import { Subscriptions } from '../../../../../types/Subscriptions';
import { UserOnlineStatusSubscriptionArgs } from '../../inputs/UserOnlineStatusSubscriptionArgs';
import { UpdateUserArgs } from '../../../../../prisma/generated/type-graphql/resolvers/crud/User/args';

@TypeGraphQL.Resolver((_of) => User)
export class CustomUserResolver {
  @TypeGraphQL.FieldResolver((type) => Int, { nullable: true })
  async followedByCount(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: GraphQLContext): Promise<number> {
    return ctx.prisma.user.count({ where: { following: { some: { id: user.id } } } });
  }

  @TypeGraphQL.FieldResolver((type) => Int, { nullable: true })
  async followingCount(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: GraphQLContext): Promise<number> {
    return ctx.prisma.user.count({ where: { followedBy: { some: { id: user.id } } } });
  }

  @TypeGraphQL.FieldResolver((type) => Boolean, { nullable: true })
  async isMeFollowing(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: GraphQLContext): Promise<number> {
    return ctx.prisma.user.count({ where: { id: user.id, followedBy: { some: { id: ctx.user.id } } } });
  }

  @TypeGraphQL.FieldResolver((type) => Boolean, { nullable: true })
  async isMyself(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: GraphQLContext): Promise<boolean> {
    return user.id === ctx.user.id;
  }

  @TypeGraphQL.Authorized([Role.USER])
  @TypeGraphQL.Query((_returns) => [User], {
    nullable: false,
    description: undefined,
  })
  async followRecommendations(@TypeGraphQL.Ctx() ctx: GraphQLContext): Promise<User[]> {
    const ids = await ctx.prisma.user.findMany({
      where: {
        followedBy: { none: { id: ctx.user.id } },
        id: { not: { equals: ctx.user.id } },
      },
      select: { id: true },
    });

    return await ctx.prisma.user.findMany({
      where: {
        OR: knuthShuffle(ids).slice(0, 3),
      },
    });
  }

  @TypeGraphQL.Authorized([Role.USER])
  @TypeGraphQL.Query((_returns) => User, {
    nullable: false,
    description: undefined,
  })
  async me(@TypeGraphQL.Ctx() ctx: GraphQLContext): Promise<User | null> {
    return ctx.prisma.user.findOne({ where: { id: ctx.user.id } });
  }

  @TypeGraphQL.Mutation((_returns) => User, {
    nullable: false,
    description: undefined,
  })
  async signUpUser(@TypeGraphQL.Ctx() ctx: GraphQLContext, @TypeGraphQL.Args() args: SignUpUserArgs): Promise<User> {
    const {
      data: { password, name, email, handle, accessCode },
    } = args;

    const dbEntry = await ctx.prisma.user.findMany({ where: { OR: [{ email }, { handle }] }, select: { id: true } });

    if (dbEntry.length > 0) {
      throw new BadRequestException('Email or handle is already taken.');
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
        handle,
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

  @TypeGraphQL.Subscription((returns) => Boolean, {
    topics: Subscriptions.ONLINE_STATUS,
    filter: async ({
      payload,
      args,
      context,
    }: ResolverFilterData<User, UserOnlineStatusSubscriptionArgs, GraphQLContext>) => {
      // TODO: THIS MIGHT BECOME A PROBLEM WHEN THERE IS A LOT OF ACTIVITY. BECAUSE FOR EACH NEW COMMENT WE CHECK FOR EACH
      // SUB IF THEY ARE FOLLOWING.
      const user = await context.prisma.user.findOne({
        where: { id: payload.id },
        select: { followedBy: { select: { id: true } } },
      });

      return payload.id === args.userId && user.followedBy.find((user) => user.id === context.user.id) !== undefined;
    },
  })
  onlineStatus(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: GraphQLContext,
    @TypeGraphQL.Args() args: UserOnlineStatusSubscriptionArgs,
  ) {
    return user.isOnline;
  }
}
