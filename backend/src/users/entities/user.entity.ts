import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { TaskEntity } from 'src/tasks/entities/task.entity';
import { UserRoles } from 'src/types/types';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType({ description: 'The Users object' })
@Entity({ name: 'Users' })
export class UserEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => UserRoles, { nullable: true, defaultValue: UserRoles.USER })
  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.USER })
  role?: UserRoles;

  @Field()
  @Column({ type: 'varchar', unique: true })
  email: string;

  @Field({ nullable: true })
  @Column('varchar')
  password: string;

  @Field((type) => CategoryEntity)
  @OneToMany(() => CategoryEntity, (category) => category.user, {
    onDelete: 'CASCADE',
  })
  categories: CategoryEntity[];
}
