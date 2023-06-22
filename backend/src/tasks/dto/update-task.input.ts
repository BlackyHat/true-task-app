import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskInput {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;
  @Field({ nullable: true })
  description?: string;
  @Field()
  dateStart: Date;
  @Field()
  dateEnd: Date;
  @Field()
  categoryId: number;
}
