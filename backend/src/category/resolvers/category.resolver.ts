import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { CategoryEntity } from '../entities/category.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateCategoryInput } from '../inputs/create-category.inputs';
import { UpdateCategoryInput } from '../inputs/update-category.inputs';

@Resolver('Categories')
export class CategoryResolver {
  constructor(private readonly categorySevice: CategoryService) {}

  @Mutation(() => CategoryEntity, { name: 'addCategory' })
  @UseGuards(JwtAuthGuard)
  async createCategory(
    @Args('createCategory') createCategory: CreateCategoryInput,
    @Context() context,
  ): Promise<CategoryEntity> {
    return this.categorySevice.createCategory(createCategory, context.req.user);
  }
  @Query(() => [CategoryEntity], { name: 'allCategories' })
  @UseGuards(JwtAuthGuard)
  async getAllCategory(
    @Args('userId') userId: number,
  ): Promise<CategoryEntity[]> {
    return await this.categorySevice.getAllCategories(userId);
  }
  @Query(() => CategoryEntity, { name: 'categoryById' })
  async getOneCategory(@Args('id') id: number): Promise<CategoryEntity> {
    return await this.categorySevice.getOneCategory(id);
  }

  @Mutation(() => CategoryEntity, { name: 'updateCategory' })
  @UseGuards(JwtAuthGuard)
  async updateCategory(
    @Args('updateCategory') updateCategory: UpdateCategoryInput,
    @Args('id') id: number,
  ): Promise<CategoryEntity> {
    return await this.categorySevice.updateCategory(id, updateCategory);
  }

  @Mutation(() => Number, { name: 'deleteCategory' })
  @UseGuards(JwtAuthGuard)
  async removeCategory(@Args('id') id: number): Promise<string> {
    return await this.categorySevice.removeCategory(id);
  }
}
