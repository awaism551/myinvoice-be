import { Injectable } from '@nestjs/common';
import { Category } from 'src/categories/categories.model';
import { ItemInput } from 'src/types';
import { Vendor } from 'src/vendors/vendors.model';
import { Item } from './items.model';

@Injectable()
export class ItemService {
  parentModelsArray = [Category, Vendor];
  async getItems() {
    try {
      return await Item.findAll({
        include: this.parentModelsArray,
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
        include: this.parentModelsArray,
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  async createItem(name: string, price: number, categoryId: number) {
    let createdItem = await Item.create({ name, price, categoryId });
    return await Item.findOne({
      where: {
        id: createdItem.id,
      },
      include: this.parentModelsArray,
    });
  }

  async updateItem(id: number, input: ItemInput) {
    let affectedRows;
    try {
      affectedRows = await Item.update({ ...input }, { where: { id } });
      if (affectedRows[0] === 1) {
        return await Item.findOne({
          where: {
            id,
          },
          include: this.parentModelsArray,
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
