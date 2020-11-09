import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ArgsType()
export class NewCommentSubscriptionArgs {
  @TypeGraphQL.Field(type => String)
  feedItemId: string;
}