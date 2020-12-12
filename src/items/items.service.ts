import { Injectable } from '@nestjs/common';
import { Item } from './items.model';

@Injectable()
export class ItemsService {
  async getItems() {
    try {
      return await Item.findAll();
    } catch (error) {
      console.log('error', error);
    }
  }

  async getItem(id: number) {
    try {
      return await Item.findByPk(id);
    } catch (error) {
      console.log('error', error);
    }
  }

  async createItem(name: string, price: number) {
    return await Item.create({ name, price });
  }

  async updateItem(id: number, name: string, price: number) {
    let result;
    try {
      result = await Item.update({ name, price }, { where: { id } });
      if (result[0] === 1) {
        return await Item.findByPk(id);
      }
    } catch (error) {
      console.log('error update::', error);
    }
  }

  async deleteItem(id: number) {
    return (await Item.destroy({ where: { id } })) === 1 ? true : false;
  }
}
