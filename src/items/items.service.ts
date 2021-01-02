import { Injectable } from '@nestjs/common';
import { Category } from 'src/categories/categories.model';
import { Item } from './items.model';

@Injectable()
export class ItemsService {
  async getItems() {
    try {
      return await Item.findAll({
        include: Category,
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  async getItem(id: number) {
    try {
      return await Item.findOne({
        where: {
          id,
        },
        include: Category,
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  async createItem(name: string, price: number, categoryId: number) {
    return await Item.create({ name, price, categoryId });
  }

  async updateItem(
    id: number,
    name?: string,
    price?: number,
    categoryId?: string,
  ) {
    let result;
    try {
      result = await Item.update(
        { name, price, categoryId },
        { where: { id } },
      );
      if (result[0] === 1) {
        return await Item.findOne({
          where: {
            id,
          },
          include: Category,
        });
      }
    } catch (error) {
      console.log('error update::', error);
    }
  }

  async deleteItem(id: number) {
    return (await Item.destroy({ where: { id } })) === 1 ? true : false;
  }
}
