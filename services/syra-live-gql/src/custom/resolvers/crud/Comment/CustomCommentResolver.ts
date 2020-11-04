import * as TypeGraphQL from 'type-graphql';
import { Comment } from '../../../../../prisma/generated/type-graphql/models';
import { GraphQLContext } from '../../../../../types/GraphQLContext';
import { Int } from 'type-graphql';

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
}
