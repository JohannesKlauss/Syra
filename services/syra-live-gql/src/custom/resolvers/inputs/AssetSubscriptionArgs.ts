import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ArgsType()
export class AssetSubscriptionArgs {
  @TypeGraphQL.Field(type => String, {
    nullable: false
  })
  projectId!: string;

  @TypeGraphQL.Field(type => String, {
    nullable: false
  })
  jobId!: string;
}