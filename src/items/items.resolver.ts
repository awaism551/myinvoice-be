import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginGuard } from 'src/auth/jwt-auth.guard';
import { ItemService } from './items.service';
@Resolver('Item')
export class ItemResolver {
  constructor(private itemService: ItemService) {}

  @Query('items')
  @UseGuards(LoginGuard)
  async getItems() {
    return await this.itemService.getItems();
  }

  @Query('item')
  @UseGuards(LoginGuard)
  async getItem(
    @Args('itemId', ParseIntPipe)
    id: number,
  ) {
    return await this.itemService.getItem(id);
  }

  @Mutation('createItem')
  @UseGuards(LoginGuard)
  async create(
    @Args('name') name: string,
    @Args('price') price: number,
    @Args('categoryId') categoryId: number,
  ) {
    return await this.itemService.createItem(name, price, categoryId);
  }

  @Mutation('updateItem')
  @UseGuards(LoginGuard)
  async update(
    @Args('itemId', ParseIntPipe) id: number,
    @Args('name') name?: string,
    @Args('price') price?: number,
    @Args('categoryId') categoryId?: string,
  ) {
    if (!name && !price && !categoryId) {
      throw new Error(
        'Please provide one of the following fields:Name, Price, Category',
      );
    } else {
      return await this.itemService.updateItem(id, name, price, categoryId);
    }
  }

  @Mutation('deleteItem')
  @UseGuards(LoginGuard)
  async delete(@Args('itemId', ParseIntPipe) id: number) {
    return await this.itemService.deleteItem(id);
  }
}
