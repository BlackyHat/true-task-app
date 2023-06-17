import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType({ description: 'The Tasks object' })
@Entity({ name: 'Tasks' })
export class TaskEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  dateStart: Date;

  @Field()
  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  dateEnd: Date;

  @Field()
  @Column('varchar')
  name: string;

  @Field(() => CategoryEntity)
  @ManyToOne(() => CategoryEntity, (category) => category.tasks)
  @JoinColumn({ name: 'categoryId' })
  category: CategoryEntity;

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.tasks)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;
}
