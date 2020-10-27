import { MiddlewareFn } from 'type-graphql';
import { GraphQLContext } from '../../../types/GraphQLContext';
import { UnauthorizedException } from '@nestjs/common';

/**
 * Checks if a logged in user is present, throws otherwise.
 *
 * @constructor
 */
export function GqlAuthGuard(): MiddlewareFn<GraphQLContext> {
  return async ({context}, next) => {
    console.log('context', context.user);


    if (context.user === null) {
      throw new UnauthorizedException('Not logged in.');
    }

    return await next();
  };
}
