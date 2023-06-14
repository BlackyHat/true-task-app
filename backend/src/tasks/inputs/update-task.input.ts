import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskInput {
  @Field(() => ID)
  id: number;
  @Field()
  name: string;
  @Field()
  dateStart: string;
  @Field()
  dateEnd: string;
}
