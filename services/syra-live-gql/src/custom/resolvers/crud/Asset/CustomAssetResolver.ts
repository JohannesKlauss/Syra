import * as TypeGraphQL from 'type-graphql';
import { ResolverFilterData } from 'type-graphql';
import { PublishAssetArgs } from '../../inputs/PublishAssetArgs';
import { Subscriptions } from '../../../../../types/Subscriptions';
import { AssetSubscriptionArgs } from '../../inputs/AssetSubscriptionArgs';
import { GraphQLContext } from '../../../../../types/GraphQLContext';
import { Asset } from '../../../../../prisma/generated/type-graphql';

@TypeGraphQL.Resolver((_of) => Asset)
export class CustomAssetResolver {
  @TypeGraphQL.Subscription((_returns) => PublishAssetArgs, {
    topics: [Subscriptions.UPLOADED_FILE_PROCESSED, Subscriptions.PEAK_WAVEFORM_ANALYZED],
    filter: async ({ payload, args }: ResolverFilterData<PublishAssetArgs, AssetSubscriptionArgs, GraphQLContext>) => {
      return payload.projectId === args.projectId && payload.jobId === args.jobId;
    },
  })
  assetAvailable(
    @TypeGraphQL.Root() asset: PublishAssetArgs,
    @TypeGraphQL.Ctx() ctx: GraphQLContext,
    @TypeGraphQL.Args() args: AssetSubscriptionArgs,
  ) {
    return asset;
  }
}