import { Field, ObjectType } from '@nestjs/graphql';
import { UserEntity } from 'src/users/entities/user.entity';

@ObjectType({ description: 'The Login object' })
export class LoginResponse {
  @Field()
  token: string;
  @Field(() => UserEntity)
  user: UserEntity;
}
