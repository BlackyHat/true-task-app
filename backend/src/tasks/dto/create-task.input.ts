import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
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
