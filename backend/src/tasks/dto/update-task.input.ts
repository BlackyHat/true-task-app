import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskInput {
  @Field(() => ID)
  id: number;
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  description?: string;
  @Field({ nullable: true })
  dateStart: string;
  @Field({ nullable: true })
  dateEnd: string;
  @Field()
  categoryId: number;
}
