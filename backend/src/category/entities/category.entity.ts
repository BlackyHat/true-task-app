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

  @Field({ nullable: true })
  @CreateDateColumn()
  dateCreated: Date;

  @Field({ nullable: true })
  @Column('varchar', { length: 200 })
  name: string;

  @Field(() => UserEntity, { nullable: true })
  @ManyToOne(() => UserEntity, (user) => user.categories)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @Field(() => TaskEntity, { nullable: true })
  @OneToMany(() => TaskEntity, (task) => task.category, { onDelete: 'CASCADE' })
  tasks: TaskEntity[];
}
