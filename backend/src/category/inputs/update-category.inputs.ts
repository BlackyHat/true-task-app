import { InputType, PartialType } from '@nestjs/graphql';
import { CreateCategoryInput } from './create-category.inputs';

@InputType({ description: 'The Categories input type' })
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  // @Field()
  // @IsNotEmpty()
  // id: number;
  // @Field()
  // @IsNotEmpty()
  // name: string;
}
