import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ArgsType()
export class TranscodedAssetSubscriptionArgs {
  @TypeGraphQL.Field(type => String, {
    nullable: false
  })
  projectId!: string;

  @TypeGraphQL.Field(type => String, {
    nullable: false
  })
  assetId!: string;
}