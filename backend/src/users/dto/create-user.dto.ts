import { IsEmail, MinLength } from 'class-validator';
import { UserRoles } from '../entities/user.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateUserDto {
  @Field()
  @IsEmail()
  email: string;
  @Field()
  @MinLength(6, { message: 'Password must be more than 6 symbols' })
  password: string;
  @Field()
  role?: UserRoles;
}
