import { Module } from '@nestjs/common';
import { categoryController } from './category/category.controller';
import { categoryService } from './category/category.service';

@Module({
  imports: [],
  controllers: [categoryController],
  providers: [categoryService],
})
export class categoriesModule {}
