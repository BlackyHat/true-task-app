import { Field, Int, InputType } from '@nestjs/graphql';
import {
  IsAlphanumeric,
  IsDate,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  Length,
} from 'class-validator';

@InputType()
export class UpdateTaskInput {
  @Field(() => Int)
  @IsInt()
  @IsNotEmpty()
  id: number;

  @Field()
  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(3, 120)
  name: string;

  @Field({ nullable: true })
  @IsAlphanumeric()
  @Length(3, 480)
  description?: string;
  @Field()
  @IsDate()
  @IsNotEmpty()
  dateStart: Date;
  @Field()
  @IsDate()
  @IsNotEmpty()
  dateEnd: Date;
  @Field()
  @IsNotEmpty()
  @IsInt()
  categoryId: number;
}
