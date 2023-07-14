import { IsAlphanumeric, IsNotEmpty, Length } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field()
  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(3, 200)
  name: string;
}
