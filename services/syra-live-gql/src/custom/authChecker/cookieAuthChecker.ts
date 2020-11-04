import { AuthChecker } from 'type-graphql';
import { GraphQLContext } from '../../../types/GraphQLContext';

export const cookieAuthChecker: AuthChecker<GraphQLContext> = ({ context }, roles) => {
  return context.user !== null && (roles.length === 0 || roles.includes(context.user.role));
};