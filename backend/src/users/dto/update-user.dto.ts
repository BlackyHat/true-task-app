import { IsEmail, IsNotEmpty } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { UserRoles } from '../entities/user.entity';

@InputType()
export class UpdateUserDto {
  @Field()
  @IsNotEmpty()
  id: number;
  @Field()
  @IsEmail()
  email: string;
  @Field()
  @IsNotEmpty()
  password: string;
  @Field()
  role?: UserRoles;
}
