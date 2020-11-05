import * as TypeGraphQL from 'type-graphql';
import { Comment } from '../../../../../prisma/generated/type-graphql/models';
import { GraphQLContext } from '../../../../../types/GraphQLContext';
import { Int, Publisher, ResolverFilterData } from 'type-graphql';
import { Subscriptions } from '../../../../../types/Subscriptions';
import { CreateCommentArgs } from '../../../../../prisma/generated/type-graphql/resolvers/crud/Comment/args';
import { NewCommentSubscriptionArgs } from '../../inputs/NewCommentSubscriptionArgs';

@TypeGraphQL.Resolver((_of) => Comment)
export class CustomCommentResolver {
  @TypeGraphQL.FieldResolver((type) => Int, { nullable: true })
  async likeCount(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: GraphQLContext): Promise<number> {
    return ctx.prisma.commentLike.count({ where: { commentId: comment.id } });
  }

  @TypeGraphQL.FieldResolver((type) => Int, { nullable: true })
  async commentCount(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: GraphQLContext): Promise<number> {
    return ctx.prisma.comment.count({ where: { parentComment: { id: { equals: comment.id } } } });
  }

  @TypeGraphQL.FieldResolver((type) => Boolean, { nullable: true })
  async isMeLiking(@TypeGraphQL.Root() comment: Comment, @TypeGraphQL.Ctx() ctx: GraphQLContext): Promise<number> {
    return ctx.prisma.commentLike.count({
      where: {
        commentId: comment.id,
        userId: ctx.user.id,
      },
    });
  }

  @TypeGraphQL.Mutation((_returns) => Comment, {
    nullable: false,
    description: undefined,
  })
  async createComment(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: CreateCommentArgs,
    @TypeGraphQL.PubSub(Subscriptions.NEW_COMMENT) publish: Publisher<Comment>,
  ): Promise<Comment> {
    const comment = await ctx.prisma.comment.create(args);

    await publish(comment);

    return comment;
  }

  @TypeGraphQL.Subscription(returns => Comment, {
    topics: Subscriptions.NEW_COMMENT,
    filter: ({ payload, args, context }: ResolverFilterData<Comment, NewCommentSubscriptionArgs, GraphQLContext>) => {
      return (
        payload.feedItemId === args.feedItemId &&
        payload.feedItem.author.followedBy.find((user) => user.id === context.user.id) !== undefined
      );
    },
  })
  newComment(
    @TypeGraphQL.Root() comment: Comment,
    @TypeGraphQL.Ctx() ctx: GraphQLContext,
    @TypeGraphQL.Args() args: NewCommentSubscriptionArgs,
  ) {
    return comment;
  }
}
