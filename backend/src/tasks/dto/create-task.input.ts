import { Field, InputType } from '@nestjs/graphql';
import {
  IsAlphanumeric,
  IsDate,
  IsInt,
  IsNotEmpty,
  Length,
  ValidateIf,
} from 'class-validator';

@InputType()
export class CreateTaskInput {
  @Field()
  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(3, 120)
  name: string;

  @Field({ nullable: true })
  @ValidateIf((object, value) => value !== '')
  @IsAlphanumeric()
  @Length(6, 480)
  description?: string;

  @Field()
  @IsDate()
  @IsNotEmpty()
  dateStart: Date;
  @Field()
  @IsNotEmpty()
  @IsDate()
  dateEnd: Date;
  @Field()
  @IsNotEmpty()
  @IsInt()
  categoryId: number;
}
