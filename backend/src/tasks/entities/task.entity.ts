import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CategoryEntity } from 'src/categories/entities/category.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('task')
export class TaskEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  dateStart: Date;

  @Field()
  @Column()
  dateEnd: Date;

  @Field()
  @Column({ type: 'varchar', length: 36 })
  name: string;

  @ManyToOne(() => CategoryEntity)
  @JoinColumn({ name: 'categoryId' })
  category: CategoryEntity;
}
