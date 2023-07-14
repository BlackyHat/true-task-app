import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field()
  @IsNotEmpty()
  @Length(6)
  @Matches(/.*[0-9].*/, { message: 'Password requires a number' })
  @Matches(/.*[a-z].*/, { message: 'Password requires a lowercase letter' })
  @Matches(/.*[A-Z].*/, { message: 'Password requires an uppercase letter' })
  @Matches(/.*[^\w].*/, { message: 'Password requires a symbol' })
  password: string;
}
