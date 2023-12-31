import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { UserRoles } from 'src/types/types';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType({ description: 'The Users object' })
@Entity({ name: 'Users' })
export class UserEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field((type) => String, {defaultValue: UserRoles.USER })
  @Column({ type: 'enum', enum: UserRoles, default: UserRoles.USER })
  role: String;

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
}
