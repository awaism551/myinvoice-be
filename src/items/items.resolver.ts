import { ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ItemsService } from './items.service';
@Resolver('Item')
export class ItemResolver {
  constructor(private itemService: ItemsService) {}

  @Query('items')
  async getItems() {
    return await this.itemService.getItems();
  }

  @Query('item')
  async getItem(
    @Args('itemId', ParseIntPipe)
    id: number,
  ) {
    return await this.itemService.getItem(id);
  }

  @Mutation('createItem')
  async create(@Args('name') name: string, @Args('price') price: number) {
    const createdItem = await this.itemService.createItem(name, price);
    return createdItem;
  }

  @Mutation('updateItem')
  async update(
    @Args('itemId', ParseIntPipe) id: number,
    @Args('name') name: string,
    @Args('price') price: number,
  ) {
    const updatedItem = await this.itemService.updateItem(id, name, price);
    return updatedItem;
  }

  @Mutation('deleteItem')
  async delete(@Args('itemId', ParseIntPipe) id: number) {
    return await this.itemService.deleteItem(id);
  }
}
