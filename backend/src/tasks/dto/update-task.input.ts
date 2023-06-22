import { Field, Int, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskInput {
  @Field(() => Int)
  id: number;
  @Field({ nullable: true })
  name: string;
  @Field({ nullable: true })
  description?: string;
  @Field({ nullable: true })
  dateStart: Date;
  @Field({ nullable: true })
  dateEnd: Date;
  @Field()
  categoryId: number;
}
