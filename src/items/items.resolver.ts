import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/roles/roles.decorator';
import { enumRoles, ItemInput } from 'src/types';
import { ItemService } from './items.service';

@Resolver('Item')
export class ItemResolver {
  constructor(private itemService: ItemService) {}

  @Query('items')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.sales, enumRoles.manager, enumRoles.admin)
  async getItems() {
    return await this.itemService.getItems();
  }

  @Query('item')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.sales, enumRoles.manager, enumRoles.admin)
  async getItem(
    @Args('itemId', ParseIntPipe)
    id: number,
  ) {
    return await this.itemService.getItem(id);
  }

  @Mutation('createItem')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.manager, enumRoles.admin)
  async create(
    @Args('name') name: string,
    @Args('price') price: number,
    @Args('categoryId') categoryId: number,
  ) {
    return await this.itemService.createItem(name, price, categoryId);
  }

  @Mutation('updateItem')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.manager, enumRoles.admin)
  async update(
    @Args('itemId', ParseIntPipe) id: number,
    @Args('input') input: ItemInput,
  ) {
    if (!input || this.isEmpty(input)) {
      throw new Error('Please provide atleast One Field To Update');
    } else {
      return await this.itemService.updateItem(id, input);
    }
  }

  isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  @Mutation('deleteItem')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.manager, enumRoles.admin)
  async delete(@Args('itemId', ParseIntPipe) id: number) {
    return await this.itemService.deleteItem(id);
  }
}
