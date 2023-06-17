import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class UpdateCategoryInput {
  @Field(() => ID)
  id: number;
  @Field()
  @IsNotEmpty()
  name: string;
}
