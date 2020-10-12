import { Field, InputType } from 'type-graphql';
import { User } from '../../../../prisma/generated/type-graphql/models';

@InputType({ description: "New recipe data" })
export class SignUpUserLocalInput implements Partial<User> {
  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  password: string;
}