import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTaskInput {
  @Field()
  @IsNotEmpty()
  name: string;
  @Field()
  @IsNotEmpty()
  dateStart: string;
  @Field()
  @IsNotEmpty()
  dateEnd: string;
  @Field()
  @IsNotEmpty()
  categoryId: number;
}
