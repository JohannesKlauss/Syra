import * as TypeGraphQL from 'type-graphql';
import { Project } from "../../../../../prisma/generated/type-graphql";
import { GraphQLContext } from "../../../../../types/GraphQLContext";
import { ProjectChangesSubscriptionArgs } from "../../inputs/ProjectChangesSubscriptionArgs";
import { Subscriptions } from "../../../../../types/Subscriptions";
import { Publisher, ResolverFilterData } from "type-graphql";
import { PublishProjectChangeArgs } from "../../inputs/PublishProjectChangeArgs";

@TypeGraphQL.Resolver(_of => Project)
export class CustomProjectChangeResolver {
  @TypeGraphQL.Mutation((_returns) => PublishProjectChangeArgs, {
    nullable: false,
    description: undefined,
  })
  async publishChange(
    @TypeGraphQL.Ctx() ctx: GraphQLContext,
    @TypeGraphQL.Args() args: PublishProjectChangeArgs,
    @TypeGraphQL.PubSub(Subscriptions.PROJECT_CONTENT_CHANGE) publish: Publisher<PublishProjectChangeArgs>,
  ): Promise<PublishProjectChangeArgs> {
    await publish(args);

    return args;
  }

  @TypeGraphQL.Subscription(_returns => PublishProjectChangeArgs, {
    topics: Subscriptions.PROJECT_CONTENT_CHANGE,
    filter: async ({payload, args, context}: ResolverFilterData<PublishProjectChangeArgs, ProjectChangesSubscriptionArgs, GraphQLContext>) => {
      return (
        payload.projectId === args.projectId
      );
    },
  })
  changes(
    @TypeGraphQL.Root() projectChanges: PublishProjectChangeArgs,
    @TypeGraphQL.Ctx() ctx: GraphQLContext,
    @TypeGraphQL.Args() args: ProjectChangesSubscriptionArgs,
  ) {
    return projectChanges;
  }
}