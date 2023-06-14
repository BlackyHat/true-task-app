import { Injectable } from '@nestjs/common';
import { TaskEntity } from '../entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTaskInput } from '../inputs/create-task.input';
import { UpdateTaskInput } from '../inputs/update-task.input';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  async createTask(createTaskInput: CreateTaskInput): Promise<TaskEntity> {
    return await this.taskRepository.save({ ...createTaskInput });
  }

  async getOneTask(id: number): Promise<TaskEntity> {
    return await this.taskRepository.findOne({ where: { id } });
  }

  async getAllTasks(): Promise<TaskEntity[]> {
    return await this.taskRepository.find();
  }

  async removeTask(id: number): Promise<number> {
    await this.taskRepository.delete({ id });
    return id;
  }

  async updateTask(updateTaskInput: UpdateTaskInput): Promise<TaskEntity> {
    await this.taskRepository.update(
      { id: updateTaskInput.id },
      { ...updateTaskInput },
    );
    return await this.getOneTask(updateTaskInput.id);
  }
}
