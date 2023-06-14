import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { CategoryService } from '../services/category.service';
import { CategoryEntity } from '../entities/category.entity';
import { CreateCategoryInput } from '../inputs/create-category.input';
import { UpdateCategoryInput } from '../inputs/update-category.input';

@Resolver('Category')
export class CategoryResolver {
  constructor(private readonly categorySevice: CategoryService) {}
  @Mutation(() => CategoryEntity)
  async createCategory(
    @Args('createCategory') createCategoryInput: CreateCategoryInput,
  ): Promise<CategoryEntity> {
    return await this.categorySevice.createCategory(createCategoryInput);
  }
  @Mutation(() => CategoryEntity)
  async updateUser(
    @Args('updateUser') updateCategoryInput: UpdateCategoryInput,
  ): Promise<CategoryEntity> {
    return await this.categorySevice.updateCategory(updateCategoryInput);
  }

  @Mutation(() => Number)
  async removeUser(@Args('id') id: number): Promise<number> {
    return await this.categorySevice.removeCategory(id);
  }

  @Query(() => CategoryEntity)
  async getOneUser(@Args('id') id: number): Promise<CategoryEntity> {
    return await this.categorySevice.getOneCategory(id);
  }
  @Query(() => [CategoryEntity])
  async getAllUser(): Promise<CategoryEntity[]> {
    return await this.categorySevice.getAllCategories();
  }
}
