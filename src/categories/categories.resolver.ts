import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginGuard } from 'src/auth/jwt-auth.guard';
import { CategoryService } from './categories.service';

@Resolver('Category')
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @Query('itemCategories')
  @UseGuards(LoginGuard)
  async getCategories() {
    return await this.categoryService.getItemCategories();
  }

  @Query('itemCategory')
  @UseGuards(LoginGuard)
  async getCategory(
    @Args('itemCategoryId', ParseIntPipe)
    id: number,
  ) {
    return await this.categoryService.getItemCategory(id);
  }

  @Mutation('createItemCategory')
  @UseGuards(LoginGuard)
  async create(@Args('title') title: string) {
    const createdCategory = await this.categoryService.createItemCategory(
      title,
    );
    return createdCategory;
  }

  @Mutation('updateItemCategory')
  @UseGuards(LoginGuard)
  async update(
    @Args('itemCategoryId', ParseIntPipe) id: number,
    @Args('title') title: string,
  ) {
    const updatedCategory = await this.categoryService.updateItemCategory(
      id,
      title,
    );
    return updatedCategory;
  }

  @Mutation('deleteItemCategory')
  @UseGuards(LoginGuard)
  async delete(@Args('itemCategoryId', ParseIntPipe) id: number) {
    return await this.categoryService.deleteItemCategory(id);
  }
}
