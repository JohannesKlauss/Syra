import { Ctx, Query, Resolver } from 'type-graphql';
import { Context } from '../../types/Context';
import { User } from 'prisma/generated/type-graphql';

@Resolver(of => User)
export class MeResolver {
  @Query(returns => User, { nullable: true })
  async me(@Ctx() { prisma, user }: Context): Promise<User | null> {
    return await prisma.user.findOne({where: {id: user.id}});
  }
}