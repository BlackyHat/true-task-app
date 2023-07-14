import { Field, Int, InputType } from '@nestjs/graphql';
import { IsAlphanumeric, IsInt, IsNotEmpty, Length } from 'class-validator';

@InputType()
export class UpdateCategoryInput {
  @Field(() => Int)
  @IsInt()
  @IsNotEmpty()
  id: number;
  @Field()
  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(3, 200)
  name: string;
}

/**
 * @InputType()
  export class CreateCategoryInput extends PickType(CategoryEntity, [
  'id', 'name'
] as const) {}
 */
