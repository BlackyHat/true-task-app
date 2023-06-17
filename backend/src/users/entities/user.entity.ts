import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { TaskEntity } from 'src/tasks/entities/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRoles {
  ADMIN = 'admin',
  USER = 'user',
}

registerEnumType(UserRoles, {
  name: 'userRoles',
});

@ObjectType({ description: 'The Users object' })
@Entity({ name: 'Users' })
export class UserEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field((type) => UserRoles, { nullable: true, defaultValue: UserRoles.USER })
  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.USER })
  role?: UserRoles;

  @Field()
  @Column({ type: 'varchar', unique: true })
  email: string;

  @Field()
  @Column('varchar')
  password: string;

  @Field((type) => CategoryEntity)
  @OneToMany(() => CategoryEntity, (category) => category.user, {
    onDelete: 'CASCADE',
  })
  categories: CategoryEntity[];

  @Field((type) => TaskEntity)
  @OneToMany(() => TaskEntity, (task) => task.user, { onDelete: 'CASCADE' })
  tasks: TaskEntity[];
}
