import { Field, ID, ObjectType } from '@nestjs/graphql';
import { TaskEntity } from 'src/tasks/entities/task.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType({ description: 'The Categories object' })
@Entity({ name: 'Categories' })
export class CategoryEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn()
  dateCreated: Date;

  @Field()
  @Column('varchar', { length: 200 })
  name: string;

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.categories)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @Field(() => TaskEntity)
  @OneToMany(() => TaskEntity, (task) => task.category, { onDelete: 'CASCADE' })
  tasks: TaskEntity[];
}
