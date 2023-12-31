import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';

@InputType()
export class LoginUserInput {
  @Field()
  @IsEmail()
  email: string;
  @Field()
  @MinLength(6, { message: 'Password must be more than 6 symbols' })
  password: string;
}
