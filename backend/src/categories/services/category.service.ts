import { Injectable } from '@nestjs/common';
import { CategoryEntity } from '../entities/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryInput } from '../inputs/create-category.input';
import { UpdateCategoryInput } from '../inputs/update-category.input';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async createCategory(
    createCategoryInput: CreateCategoryInput,
  ): Promise<CategoryEntity> {
    return await this.categoryRepository.save({ ...createCategoryInput });
  }

  async getOneCategory(id: number): Promise<CategoryEntity> {
    return await this.categoryRepository.findOne({ where: { id } });
  }

  async getAllCategories(): Promise<CategoryEntity[]> {
    return await this.categoryRepository.find();
  }

  async removeCategory(id: number): Promise<number> {
    await this.categoryRepository.delete({ id });
    return id;
  }

  async updateCategory(
    updateCategoryInput: UpdateCategoryInput,
  ): Promise<CategoryEntity> {
    await this.categoryRepository.update(
      { id: updateCategoryInput.id },
      { ...updateCategoryInput },
    );
    return await this.getOneCategory(updateCategoryInput.id);
  }
}
