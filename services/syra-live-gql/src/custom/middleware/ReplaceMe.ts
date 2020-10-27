import { MiddlewareFn } from 'type-graphql';
import { GraphQLContext } from '../../../types/GraphQLContext';
import { UnauthorizedException } from '@nestjs/common';

/**
 * Replaces every userId that is set via $me with the actual logged in user.
 *
 * @constructor
 */
export function ReplaceMe(): MiddlewareFn<GraphQLContext> {
  return async ({info, context, args}, next) => {
    if (Object.keys(info.variableValues).includes('me') && info.variableValues['me'] !== context.user.id) {
      throw new UnauthorizedException('Tried to use a different userId than logged in.');
    }

    return await next();
  };
}
