import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ArgsType()
export class ProjectChangesSubscriptionArgs {
  @TypeGraphQL.Field(type => String)
  projectId: string;
}