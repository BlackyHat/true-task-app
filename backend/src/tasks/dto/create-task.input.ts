import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
  @Field()
  name: string;
  @Field({ nullable: true })
  description?: string;
  @Field()
  dateStart: string;
  @Field()
  dateEnd: string;
  @Field()
  categoryId: number;
}
