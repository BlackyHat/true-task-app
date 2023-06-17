import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskEntity } from '../entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskInput } from '../dto/create-task.input';
import { UpdateTaskInput } from '../dto/update-task.input';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  async createTask(
    createTaskInput: CreateTaskInput,
    id: number,
  ): Promise<TaskEntity> {
    const { categoryId, ...taskData } = createTaskInput;

    const newTask = {
      ...taskData,
      user: { id },
      category: { id: categoryId },
    };
    return await this.taskRepository.save(newTask);
  }

  async getOneTask(
    userId: number,
    categoryId: number,
    taskId: number,
  ): Promise<TaskEntity> {
    return await this.taskRepository.findOne({
      where: { user: { id: userId }, category: { id: categoryId }, id: taskId },
      relations: { user: true, category: true },
    });
  }

  async getAllTasks(userId: number, categoryId: number): Promise<TaskEntity[]> {
    return await this.taskRepository.find({
      where: { user: { id: userId }, category: { id: categoryId } },
      relations: { user: true, category: true },
    });
  }

  async updateTask(
    userId: number,
    categoryId: number,
    updateTaskInput: UpdateTaskInput,
  ): Promise<TaskEntity> {
    const task = await this.getOneTask(userId, categoryId, updateTaskInput.id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return await this.taskRepository.save({
      ...task,
      ...updateTaskInput,
    });
  }

  async removeTask(
    userId: number,
    categoryId: number,
    taskId: number,
  ): Promise<string> {
    const task = await this.getOneTask(userId, categoryId, taskId);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    await this.taskRepository.remove(task);
    return `Category with id:${taskId} has been deleted successful`;
  }
}
