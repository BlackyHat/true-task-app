import { Field, ObjectType, Int } from '@nestjs/graphql';
import { CategoryEntity } from '../entities/category.entity';

@ObjectType({ description: 'The Categories object' })
export class CategoryResponse extends CategoryEntity {
  @Field(() => Int)
  tasksCount: number;
}
