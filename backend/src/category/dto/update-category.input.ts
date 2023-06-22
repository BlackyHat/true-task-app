import { Field, Int, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateCategoryInput {
  @Field(() => Int)
  id: number;
  @Field()
  @IsNotEmpty()
  name: string;
}
