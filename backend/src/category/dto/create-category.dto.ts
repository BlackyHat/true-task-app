import { IsNotEmpty } from 'class-validator';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'The Categories create object' })
export class CreateCategoryDto {
  @Field()
  @IsNotEmpty()
  name: string;
}
