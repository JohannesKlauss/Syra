import * as TypeGraphQL from 'type-graphql';
import { UserSignUpInput } from '../../../inputs/UserSignUpInput';

@TypeGraphQL.ArgsType()
export class SignUpUserArgs {
  @TypeGraphQL.Field(_type => UserSignUpInput, { nullable: false })
  data!: UserSignUpInput;
}