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

@ObjectType()
@Entity('category')
export class CategoryEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn()
  dateCreated: Date;

  @Field()
  @Column({ type: 'varchar', length: 200 })
  name: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @OneToMany(() => TaskEntity, (task) => task.category)
  tasks: TaskEntity[];
}
