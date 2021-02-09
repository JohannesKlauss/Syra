import * as TypeGraphQL from 'type-graphql';
import { Project, UpdateProjectArgs } from "../../../../../prisma/generated/type-graphql";
import { GraphQLContext } from "../../../../../types/GraphQLContext";
import { ProjectChangesSubscriptionArgs } from "../../inputs/ProjectChangesSubscriptionArgs";
import { Subscriptions } from "../../../../../types/Subscriptions";
import { Publisher, ResolverFilterData } from "type-graphql";
import { PublishProjectChangeArgs } from "../../inputs/PublishProjectChangeArgs";
import { Prisma } from '@prisma/client';

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
    filter: async ({payload, args}: ResolverFilterData<PublishProjectChangeArgs, ProjectChangesSubscriptionArgs, GraphQLContext>) => {
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

  @TypeGraphQL.Mutation(_returns => Project, {
    nullable: true
  })
  async updateProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateProjectArgs): Promise<Project | null> {
    if (args.data.content) {
      const project = await ctx.prisma.project.findUnique({
        where: args.where,
        select: {
          content: true,
        }
      });

      Object.keys(args.data.content).forEach(key => {
        if (args.data.content[key] instanceof Array && project.content[key] instanceof Array) {
          const oldValues: ReadonlyArray<{id: string, value: any}> = project.content[key];

          oldValues.forEach((oldVal, i) => {
            const index = args.data.content[key].findIndex(newVal => newVal.id === oldVal.id);

            if (index < 0) {
              args.data.content[key].push(oldValues[i]);
            }
          });
        }
      });

      args.data.content = { ...project.content, ...args.data.content as Prisma.InputJsonObject };
    }

    return ctx.prisma.project.update(args);
  }
}