import { IsNotEmpty } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: 'The Categories input type' })
export class CreateCategoryInput {
  @Field({ description: 'The name of the category' })
  @IsNotEmpty()
  name: string;
}
