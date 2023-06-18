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
import { CategoryResponse } from '../dto/category-response.dto';

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

  async getAllCategories(id: number): Promise<CategoryResponse[]> {
    const categories = await this.categoryRepository.find({
      where: {
        user: { id },
      },
      relations: { user: true, tasks: true },
      order: { dateCreated: 'ASC' },
    });
    const categoriesWithTasksCount: CategoryResponse[] = [];

    for (const category of categories) {
      const tasksCount = category.tasks.length;
      categoriesWithTasksCount.push({
        ...category,
        tasksCount,
      });
    }

    return categoriesWithTasksCount;
    // const categories = await this.categoryRepository
    //   .createQueryBuilder('category')
    //   .leftJoinAndSelect('category.tasks', 'task')
    //   .select([
    //     'category.id',
    //     'category.dateCreated',
    //     'category.name',
    //     'COUNT(task.id) as tasksCount',
    //   ])
    //   .where('category.userId = :id', { id })
    //   .groupBy('category.id')
    //   .getRawMany();

    // return categories.map((category) => {
    //   const { id, dateCreated, name, tasksCount } = category;
    //   return { id, dateCreated, name, tasksCount };
    // });
  }

  async getOneCategory(userId: number, id: number): Promise<CategoryEntity> {
    const category = await this.categoryRepository.findOne({
      where: { user: { id: userId }, id },
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
      name: updateCategoryInput.name,
    });
  }

  async removeCategory(userId: number, id: number) {
    const category = await this.getOneCategory(userId, id);
    if (!category) {
      throw new NotFoundException('Category not found');
    }

    await this.categoryRepository.remove(category);
    return `Category with id:${id} has been deleted successful`;
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
