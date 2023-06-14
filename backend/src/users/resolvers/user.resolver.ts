import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import { UserEntity } from '../entities/user.entity';
import { CreateUserInput } from '../inputs/create-user.input';
import { UpdateUserInput } from '../inputs/update-user.input';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userSevice: UserService) {}
  @Mutation(() => UserEntity)
  async createUser(
    @Args('createUser') createUserInput: CreateUserInput,
  ): Promise<UserEntity> {
    return await this.userSevice.createUser(createUserInput);
  }
  @Mutation(() => UserEntity)
  async updateUser(
    @Args('updateUser') updateUserInput: UpdateUserInput,
  ): Promise<UserEntity> {
    return await this.userSevice.updateUser(updateUserInput);
  }

  @Mutation(() => Number)
  async removeUser(@Args('id') id: number): Promise<number> {
    return await this.userSevice.removeUser(id);
  }

  @Query(() => UserEntity)
  async getOneUser(@Args('id') id: number): Promise<UserEntity> {
    return await this.userSevice.getOneUser(id);
  }
  @Query(() => [UserEntity])
  async getAllUser(): Promise<UserEntity[]> {
    return await this.userSevice.getAllUsers();
  }
}
