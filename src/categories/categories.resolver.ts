import { ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CategoryService } from './categories.service';

@Resolver('Category')
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @Query('itemCategories')
  async getCategories() {
    return await this.categoryService.getItemCategories();
  }

  @Query('itemCategory')
  async getCategory(
    @Args('itemCategoryId', ParseIntPipe)
    id: number,
  ) {
    return await this.categoryService.getItemCategory(id);
  }

  @Mutation('createItemCategory')
  async create(@Args('title') title: string) {
    const createdCategory = await this.categoryService.createItemCategory(
      title,
    );
    return createdCategory;
  }

  @Mutation('updateItemCategory')
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
  async delete(@Args('itemCategoryId', ParseIntPipe) id: number) {
    return await this.categoryService.deleteItemCategory(id);
  }
}
