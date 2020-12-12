import { Injectable } from '@nestjs/common';
import { Item } from 'src/items/items.model';
import { Category } from './categories.model';

@Injectable()
export class CategoryService {
  async getItemCategories() {
    try {
      return await Category.findAll({
        include: Item,
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  async getItemCategory(id: number) {
    try {
      return await Category.findOne({
        where: {
          id,
        },
        include: Item,
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  async createItemCategory(title: string) {
    return await Category.create({ title });
  }

  async updateItemCategory(id: number, title: string) {
    let result;
    try {
      result = await Category.update({ title }, { where: { id } });
      if (result[0] === 1) {
        return await Category.findByPk(id);
      }
    } catch (error) {
      console.log('error update::', error);
    }
  }

  async deleteItemCategory(id: number) {
    return (await Category.destroy({ where: { id } })) === 1 ? true : false;
  }
}
