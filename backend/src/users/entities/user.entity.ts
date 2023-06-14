import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CategoryEntity } from 'src/categories/entities/category.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity('user')
export class UserEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;

  @Field()
  @Column({ type: 'varchar', length: 36 })
  email: string;

  @Field()
  @Column({ type: 'varchar', length: 200 })
  password: string;

  @OneToMany(() => CategoryEntity, (category) => category.user)
  categories: CategoryEntity[];
}
