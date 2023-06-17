import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';
import { UserRoles } from 'src/users/entities/user.entity';

@InputType()
export class RegisterUserInput {
  @Field()
  @IsEmail()
  email: string;
  @Field()
  @MinLength(6, { message: 'Password must be more than 6 symbols' })
  password: string;
  @Field({ nullable: true }) role?: UserRoles;
}
