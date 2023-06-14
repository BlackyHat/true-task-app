import { Module } from '@nestjs/common';
import { ServicesService } from './services/task.service';
import { ResolversResolver } from './resolvers/task.resolver';

@Module({
  providers: [ServicesService, ResolversResolver],
})
export class TasksModule {}
