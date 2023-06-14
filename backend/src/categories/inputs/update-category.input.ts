import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateCategoryInput {
  @Field(() => ID)
  id: number;
  @Field()
  name: string;
}
