import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CategoryEntity } from '../entities/category.entity';
import { CreateCategoryInput } from '../dto/create-category.input';
import { UpdateCategoryInput } from '../dto/update-category.input';
import { CategoryResponse } from '../dto/category-response.dto';

@Resolver('Categories')
export class CategoryResolver {
  constructor(private readonly categorySevice: CategoryService) {}

  @Mutation(() => CategoryEntity, { name: 'addCategory' })
  @UseGuards(JwtAuthGuard)
  async createCategory(
    @Args('createCategory') createCategory: CreateCategoryInput,
    @Context() context,
  ): Promise<CategoryEntity> {
    return this.categorySevice.createCategory(
      createCategory,
      +context.req.user.id,
    );
  }

  @Query(() => [CategoryResponse], { name: 'allCategories' })
  @UseGuards(JwtAuthGuard)
  async getAllCategory(@Context() context): Promise<CategoryResponse[]> {
    return await this.categorySevice.getAllCategories(+context.req.user.id);
  }

  @Query(() => CategoryEntity, { name: 'categoryById' })
  @UseGuards(JwtAuthGuard)
  async getOneCategory(
    @Args('categoryId') categoryId: number,
    @Context() context,
  ): Promise<CategoryEntity> {
    return await this.categorySevice.getOneCategory(
      +context.req.user.id,
      categoryId,
    );
  }

  @Mutation(() => CategoryEntity, { name: 'updateCategory' })
  @UseGuards(JwtAuthGuard)
  async updateCategory(
    @Args('updateCategory') updateCategory: UpdateCategoryInput,
    @Context() context,
  ): Promise<CategoryEntity> {
    return await this.categorySevice.updateCategory(
      +context.req.user.id,
      updateCategory,
    );
  }

  @Mutation(() => Number, { name: 'deleteCategory' })
  @UseGuards(JwtAuthGuard)
  async removeCategory(
    @Args('categoryId') categoryId: number,
    @Context() context,
  ): Promise<String> {
    return await this.categorySevice.removeCategory(
      +context.req.user.id,
      categoryId,
    );
  }
}
