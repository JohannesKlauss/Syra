import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ArgsType()
@TypeGraphQL.ObjectType()
export class PublishAssetArgs {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  jobId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  mimeType!: string;
}
