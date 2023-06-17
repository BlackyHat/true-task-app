import { TaskService } from '../services/task.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
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
    @Context() context,
  ): Promise<TaskEntity> {
    return await this.taskSevice.createTask(
      createTaskInput,
      +context.req.user.id,
    );
  }

  @Query(() => [TaskEntity], { name: 'allTasks' })
  @UseGuards(JwtAuthGuard)
  async getAllTasks(
    @Args('categoryId') categoryId: number,
    @Context() context,
  ): Promise<TaskEntity[]> {
    return await this.taskSevice.getAllTasks(+context.req.user.id, categoryId);
  }

  @Query(() => TaskEntity, { name: 'taskById' })
  @UseGuards(JwtAuthGuard)
  async getOneTask(
    @Args('taskId') taskId: number,
    @Args('categoryId') categoryId: number,

    @Context() context,
  ): Promise<TaskEntity> {
    return await this.taskSevice.getOneTask(
      +context.req.user.id,
      categoryId,
      taskId,
    );
  }

  @Mutation(() => TaskEntity, { name: 'updateTask' })
  @UseGuards(JwtAuthGuard)
  async updateTask(
    @Args('updateTask') updateUserInput: UpdateTaskInput,
    @Args('categoryId') categoryId: number,
    @Context() context,
  ): Promise<TaskEntity> {
    return await this.taskSevice.updateTask(
      +context.req.user.id,
      categoryId,
      updateUserInput,
    );
  }

  @Mutation(() => Number, { name: 'deleteTask' })
  @UseGuards(JwtAuthGuard)
  async removeTask(
    @Args('categoryId') categoryId: number,
    @Args('taskId') taskId: number,
    @Context() context,
  ): Promise<string> {
    return await this.taskSevice.removeTask(
      +context.req.user.id,
      categoryId,
      taskId,
    );
  }
}
