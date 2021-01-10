import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'src/roles/roles.enum';
import { CategoryService } from './categories.service';

@Resolver('Category')
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @Query('itemCategories')
  @UseGuards(LoginGuard)
  @Roles(Role.Sales, Role.Manager, Role.Admin)
  async getCategories() {
    return await this.categoryService.getItemCategories();
  }

  @Query('itemCategory')
  @UseGuards(LoginGuard)
  @Roles(Role.Sales, Role.Manager, Role.Admin)
  async getCategory(
    @Args('itemCategoryId', ParseIntPipe)
    id: number,
  ) {
    return await this.categoryService.getItemCategory(id);
  }

  @Mutation('createItemCategory')
  @UseGuards(LoginGuard)
  @Roles(Role.Manager, Role.Admin)
  async create(@Args('title') title: string) {
    const createdCategory = await this.categoryService.createItemCategory(
      title,
    );
    return createdCategory;
  }

  @Mutation('updateItemCategory')
  @UseGuards(LoginGuard)
  @Roles(Role.Manager, Role.Admin)
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
  @Roles(Role.Manager, Role.Admin)
  async delete(@Args('itemCategoryId', ParseIntPipe) id: number) {
    return await this.categoryService.deleteItemCategory(id);
  }
}
