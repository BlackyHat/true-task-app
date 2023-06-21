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

  async createTask(createTaskInput: CreateTaskInput): Promise<TaskEntity> {
    const { categoryId, ...taskData } = createTaskInput;

    const newTask = {
      ...taskData,
      category: { id: categoryId },
    };
    return await this.taskRepository.save(newTask);
  }

  async getOneTask(id: number, taskId: number): Promise<TaskEntity> {
    return await this.taskRepository.findOne({
      where: { category: { id }, id: taskId },
      relations: { category: true },
    });
  }

  async getAllTasks(id: number): Promise<TaskEntity[]> {
    return await this.taskRepository.find({
      where: { category: { id } },
      relations: { category: true },
      order: { dateStart: 'ASC' },
    });
  }

  async updateTask(updateTaskInput: UpdateTaskInput): Promise<TaskEntity> {
    const { categoryId, id, ...updateFields } = updateTaskInput;
    const task = await this.getOneTask(categoryId, id);
    Object.assign(task, updateFields);

    return await this.taskRepository.save(task);
  }

  async removeTask(categoryId: number, taskId: number): Promise<number> {
    const task = await this.getOneTask(categoryId, taskId);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    await this.taskRepository.remove(task);
    return taskId;
  }
}
