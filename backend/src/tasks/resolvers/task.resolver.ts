import { TaskService } from '../services/task.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

import { Resolver, Mutation, Args, Query, Context, Int } from '@nestjs/graphql';
import { TaskEntity } from '../entities/task.entity';
import { CreateTaskInput } from '../dto/create-task.input';
import { UpdateTaskInput } from '../dto/update-task.input';

@Resolver('Tasks')
export class TaskResolver {
  constructor(private readonly taskSevice: TaskService) {}

  @Mutation(() => TaskEntity, { name: 'addTask' })
  @UseGuards(JwtAuthGuard)
  async createTask(
    @Args('createTask') createTaskInput: CreateTaskInput,
  ): Promise<TaskEntity> {
    return await this.taskSevice.createTask(createTaskInput);
  }

  @Query(() => [TaskEntity], { name: 'allTasks' })
  @UseGuards(JwtAuthGuard)
  async getAllTasks(
    @Args('categoryId', { type: () => Int }) categoryId: number,
  ): Promise<TaskEntity[]> {
    return await this.taskSevice.getAllTasks(categoryId);
  }

  @Query(() => TaskEntity, { name: 'taskById' })
  @UseGuards(JwtAuthGuard)
  async getOneTask(
    @Args('taskId', { type: () => Int }) taskId: number,
    @Args('categoryId', { type: () => Int }) categoryId: number,
  ): Promise<TaskEntity> {
    return await this.taskSevice.getOneTask(categoryId, taskId);
  }

  @Mutation(() => TaskEntity, { name: 'updateTask' })
  @UseGuards(JwtAuthGuard)
  async updateTask(
    @Args('updateTask') updateTaskInput: UpdateTaskInput,
  ): Promise<TaskEntity> {
    return await this.taskSevice.updateTask(updateTaskInput);
  }

  @Mutation(() => Number, { name: 'deleteTask' })
  @UseGuards(JwtAuthGuard)
  async removeTask(
    @Args('categoryId', { type: () => Int }) categoryId: number,
    @Args('taskId', { type: () => Int }) taskId: number,
  ): Promise<Number> {
    return await this.taskSevice.removeTask(categoryId, taskId);
  }
}
