import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CategoryEntity } from '../entities/category.entity';
import { CreateCategoryInput } from '../dto/create-category.input';
import { UpdateCategoryInput } from '../dto/update-category.input';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async createCategory(
    createCategoryInput: CreateCategoryInput,
    id: number,
  ): Promise<CategoryEntity> {
    await this.findyUniqueName(id, createCategoryInput.name);

    const newCategory = {
      name: createCategoryInput.name,
      user: { id },
    };

    return await this.categoryRepository.save(newCategory);
  }

  async getAllCategories(id: number): Promise<CategoryEntity[]> {
    return await this.categoryRepository.find({
      where: {
        user: { id },
      },
      relations: { tasks: true },
    });
  }

  async getOneCategory(
    userId: number,
    categoryId: number,
  ): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findOne({
      where: { user: { id: userId }, id: categoryId },
      relations: { user: true, tasks: true },
    });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }

  async updateCategory(
    userId: number,
    updateCategoryInput: UpdateCategoryInput,
  ): Promise<CategoryEntity> {
    const category = await this.getOneCategory(userId, updateCategoryInput.id);

    if (!category) {
      throw new NotFoundException('Category not found');
    }
    await this.findyUniqueName(userId, updateCategoryInput.name);

    return await this.categoryRepository.save({
      ...category,
      ...updateCategoryInput,
    });
  }

  async removeCategory(userId: number, categoryId: number) {
    const category = await this.getOneCategory(userId, categoryId);
    if (!category) {
      throw new NotFoundException('Category not found');
    }

    await this.categoryRepository.remove(category);
    return `Category with id:${categoryId} has been deleted successful`;
  }

  async findyUniqueName(id: number, name: string): Promise<CategoryEntity[]> {
    const category = await this.categoryRepository.findBy({
      user: { id },
      name,
    });

    if (category.length) {
      throw new BadRequestException('This category already exist!');
    }
    return category;
  }
}
