import {
  Controller,
  Get,
  Post,
  Param,
  Patch,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { categoryService } from './category.service';

@Controller('category')
export class categoryController {
  constructor(private categoryService: categoryService) {
    console.log('category controller');
  }

  @Get('getAll')
  getCategories() {
    return this.categoryService.getCategories();
  }

  @Get('get/:id')
  getSingleCategory(@Param('id') id: string) {
    return this.categoryService.getSingleCategory(id);
  }

  @Post('create')
  async createCategory(@Body('title') title: string) {
    const newCategoryId = await this.categoryService.createCategory(title);
    return newCategoryId;
  }

  @Patch('update/:id')
  async updateCategory(
    @Param('id') categoryId: string,
    @Body('title') title: string,
  ) {
    let status = await this.categoryService.updateCategory(categoryId, title);
    return status ? 'updated' : 'not updated';
  }

  @Delete('remove/:id')
  async removeCategory(@Param('id') categoryId: string) {
    let status = await this.categoryService.removeCategory(categoryId);
    return status ? 'deleted' : 'not deleted';
  }
}
