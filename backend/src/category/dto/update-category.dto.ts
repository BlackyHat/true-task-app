import { ObjectType, PartialType } from '@nestjs/graphql';
import { CreateCategoryDto } from './create-category.dto';

@ObjectType({ description: 'The Categories update object' })
export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  // @Field()
  // @IsNotEmpty()
  // id: number;
  // @Field()
  // @IsNotEmpty()
  // name: string;
}
