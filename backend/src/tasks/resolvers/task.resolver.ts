import { TaskService } from '../services/task.service';
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { TaskEntity } from '../entities/task.entity';
import { CreateTaskInput } from '../inputs/create-task.input';
import { UpdateTaskInput } from '../inputs/update-task.input';

@Resolver('Task')
export class TaskResolver {
  constructor(private readonly taskSevice: TaskService) {}
  @Mutation(() => TaskEntity)
  async createTask(
    @Args('createTask') createTaskInput: CreateTaskInput,
  ): Promise<TaskEntity> {
    return await this.taskSevice.createTask(createTaskInput);
  }
  @Mutation(() => TaskEntity)
  async updateTask(
    @Args('updateTask') updateUserInput: UpdateTaskInput,
  ): Promise<TaskEntity> {
    return await this.taskSevice.updateTask(updateUserInput);
  }

  @Mutation(() => Number)
  async removeTask(@Args('id') id: number): Promise<number> {
    return await this.taskSevice.removeTask(id);
  }

  @Query(() => TaskEntity)
  async getOneTask(@Args('id') id: number): Promise<TaskEntity> {
    return await this.taskSevice.getOneTask(id);
  }
  @Query(() => [TaskEntity])
  async getAllTasks(): Promise<TaskEntity[]> {
    return await this.taskSevice.getAllTasks();
  }
}

/**
 * 
 * return await this.postRepository.createQueryBuilder("post")
  .innerJoinAndSelect("post.images", "image")
  .where("user_id = :userId", {userId: id})
  .getMany();
 */
