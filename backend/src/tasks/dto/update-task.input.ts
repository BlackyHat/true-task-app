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
  dateStart: Date;
  @Field({ nullable: true })
  dateEnd: Date;
  @Field()
  categoryId: number;
}
