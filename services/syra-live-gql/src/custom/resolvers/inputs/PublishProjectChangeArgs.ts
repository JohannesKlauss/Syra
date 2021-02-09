import * as TypeGraphQL from "type-graphql";
import { GraphQLJSONObject } from 'graphql-type-json';

@TypeGraphQL.ArgsType()
@TypeGraphQL.ObjectType()
export class PublishProjectChangeArgs {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: Date;
  
  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  date!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  authorId: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectId!: string;

  @TypeGraphQL.Field(_type => GraphQLJSONObject, {
    nullable: false
  })
  change!: typeof GraphQLJSONObject;
}
