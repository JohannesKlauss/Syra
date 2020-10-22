import * as TypeGraphQL from 'type-graphql';
import { FeedItem } from '../../../../../prisma/generated/type-graphql/models';
import { GraphQLContext } from '../../../../../types/GraphQLContext';
import { Int } from 'type-graphql';

@TypeGraphQL.Resolver(_of => FeedItem)
export class CustomFeedItemResolver {
  @TypeGraphQL.FieldResolver(type => Int, { nullable: true })
  async likeCount(@TypeGraphQL.Root() feedItem: FeedItem, @TypeGraphQL.Ctx() ctx: GraphQLContext): Promise<number> {
    return ctx.prisma.feedItemLike.count({ where: { feedItemId: feedItem.id } });
  }

  @TypeGraphQL.FieldResolver(type => Int, { nullable: true })
  async commentCount(@TypeGraphQL.Root() feedItem: FeedItem, @TypeGraphQL.Ctx() ctx: GraphQLContext): Promise<number> {
    return ctx.prisma.comment.count({ where: { feedItemId: feedItem.id } });
  }
}
