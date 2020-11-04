import { MiddlewareFn } from 'type-graphql';
import { GraphQLContext } from '../../../types/GraphQLContext';
import { UnauthorizedException } from '@nestjs/common';

/**
 * Checks if a logged in user is present, throws otherwise.
 *
 * @constructor
 */
export function GqlAuthGuard(): MiddlewareFn<GraphQLContext> {
  return async ({context, info}, next) => {
    if (context.user === null && info.fieldName !== 'signUpUser') {
      throw new UnauthorizedException('Not logged in.');
    }

    return await next();
  };
}
