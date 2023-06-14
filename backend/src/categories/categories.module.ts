import { Module } from '@nestjs/common';
import { ServicesService } from './services/category.service';
import { ResolversResolver } from './resolvers/category.resolver';

@Module({
  providers: [ServicesService, ResolversResolver],
})
export class CategoriesModule {}
