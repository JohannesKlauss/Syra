import { Field, InputType } from 'type-graphql';
import { User } from '../../../../prisma/generated/type-graphql/models';

@InputType({ description: "Data to sign up a new user" })
export class SignUpUserLocalInput implements Partial<User> {
  @Field()
  email: string;

  @Field()
  name: string;

  @Field()
  password: string;

  @Field()
  accessCode: string;
}