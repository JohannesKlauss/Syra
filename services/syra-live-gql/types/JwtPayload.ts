import { Role } from '../prisma/generated/type-graphql/enums';

export type JwtPayload = {
  id: string;
  role: Role
};