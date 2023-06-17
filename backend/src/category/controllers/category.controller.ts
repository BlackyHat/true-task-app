// import {
//   Controller,
//   Post,
//   UseGuards,
//   Req,
//   Get,
//   Body,
//   UsePipes,
//   ValidationPipe,
//   Param,
//   Patch,
//   Delete,
// } from '@nestjs/common';
// import { CategoryService } from '../services/category.service';
// import { CreateCategoryDto } from '../dto/create-category.dto';
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
// import { UpdateCategoryDto } from '../dto/update-category.dto';

// @Controller('categories')
// export class CategoryController {
//   constructor(private readonly categoryService: CategoryService) {}

//   @Post()
//   @UseGuards(JwtAuthGuard)
//   @UsePipes(new ValidationPipe())
//   create(@Body() createCategoryDto: CreateCategoryDto, @Req() req) {
//     return this.categoryService.createCategory(createCategoryDto, +req.user.id);
//   }

//   @Get()
//   @UseGuards(JwtAuthGuard)
//   findAll(@Req() req) {
//     return this.categoryService.getAllCategories(+req.user.id);
//   }
//   @Get(':id')
//   @UseGuards(JwtAuthGuard)
//   findOne(@Param('id') id: number) {
//     return this.categoryService.getAllCategories(+id);
//   }
//   @Patch(':id')
//   @UseGuards(JwtAuthGuard)
//   updateOne(
//     @Param('id') id: number,
//     @Body() updateCategoryDto: UpdateCategoryDto,
//   ) {
//     return this.categoryService.updateCategory(+id, updateCategoryDto);
//   }
//   @Delete(':id')
//   @UseGuards(JwtAuthGuard)
//   removeOne(@Param('id') id: number) {
//     return this.categoryService.removeCategory(id);
//   }
// }
