import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/roles/roles.decorator';
import { enumRoles } from 'src/types';
import { CategoryService } from './categories.service';

@Resolver('Category')
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @Query('itemCategories')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.sales, enumRoles.manager, enumRoles.admin)
  async getCategories() {
    return await this.categoryService.getItemCategories();
  }

  @Query('itemCategory')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.sales, enumRoles.manager, enumRoles.admin)
  async getCategory(
    @Args('itemCategoryId', ParseIntPipe)
    id: number,
  ) {
    return await this.categoryService.getItemCategory(id);
  }

  @Mutation('createItemCategory')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.manager, enumRoles.admin)
  async create(@Args('title') title: string) {
    return await this.categoryService.createItemCategory(title);
  }

  @Mutation('updateItemCategory')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.manager, enumRoles.admin)
  async update(
    @Args('itemCategoryId', ParseIntPipe) id: number,
    @Args('title') title: string,
  ) {
    return await this.categoryService.updateItemCategory(id, title);
  }

  @Mutation('deleteItemCategory')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.manager, enumRoles.admin)
  async delete(@Args('itemCategoryId', ParseIntPipe) id: number) {
    return await this.categoryService.deleteItemCategory(id);
  }
}
