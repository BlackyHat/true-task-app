import { Module } from '@nestjs/common';
import { TaskService } from './services/task.service';
import { TaskResolver } from './resolvers/task.resolver';
import { TaskEntity } from './entities/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  providers: [TaskService, TaskResolver],
})
export class TasksModule {}
