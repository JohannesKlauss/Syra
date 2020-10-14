import { User } from '@syra/gql-client';

export type FeUser = Pick<User, 'id' | 'email' | 'name' | 'avatar'>;