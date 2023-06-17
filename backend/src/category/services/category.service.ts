import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CategoryEntity } from '../entities/category.entity';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async createCategory(
    createCategoryDto: CreateCategoryDto,
    user: UserEntity,
  ): Promise<CategoryEntity> {
    console.log('🚀 ~ CategoryService ~ user:', user);
    const category = await this.categoryRepository.findOne({
      where: {
        user: { id: user.id },
        name: createCategoryDto.name,
      },
    });
    console.log('🚀 ~ CategoryService ~ category:', category);

    if (category) {
      throw new BadRequestException('This category already exist!');
    }

    return await this.categoryRepository.save(createCategoryDto);
  }

  async getAllCategories(id: number): Promise<CategoryEntity[]> {
    return await this.categoryRepository.find({
      relations: {
        tasks: true,
      },
    });
  }

  async getOneCategory(id: number): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findOne({
      where: { id },
      relations: { tasks: true },
    });
    if (!category) {
      throw new NotFoundException('Category not found');
    }
    return category;
  }

  async updateCategory(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findOne({
      where: { id },
    });
    if (!category) {
      throw new NotFoundException('Category not found');
    }

    await this.categoryRepository.update(id, updateCategoryDto);
    return await this.getOneCategory(id);
  }

  async removeCategory(id: number): Promise<string> {
    const category = await this.categoryRepository.findOne({
      where: { id },
    });
    if (!category) {
      throw new NotFoundException('Category not found');
    }

    await this.categoryRepository.delete(id);
    return `Category with id:${id} has been deleted successful`;
  }
}
