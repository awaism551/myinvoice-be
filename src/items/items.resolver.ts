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
  async create(@Args('input') input: ItemInput) {
    if (!input) {
      throw new Error('Input Cannot Be Empty');
    } else if (!this.between(input.discount, 0, 100)) {
      throw new Error('Discount minimum value is 0 and maximum value is 100');
    } else {
      return await this.itemService.createItem(input);
    }
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
    } else if (!this.between(input.discount, 0, 100)) {
      throw new Error('Discount minimum value is 0 and maximum value is 100');
    } else {
      return await this.itemService.updateItem(id, input);
    }
  }

  between(x, min, max) {
    return x >= min && x <= max;
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
