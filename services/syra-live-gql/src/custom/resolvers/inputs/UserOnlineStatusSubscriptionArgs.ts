import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ArgsType()
export class UserOnlineStatusSubscriptionArgs {
  @TypeGraphQL.Field(type => String)
  userId: string;
}