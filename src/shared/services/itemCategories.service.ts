import { ItemCategory } from '../../types';
const Category = require('../../../models/index').Category;

class ItemCategoriesService {
  constructor() {}

  async getItemCategories() {
    try {
      return await Category.findAll({
        raw: true,
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  async getItemCategory(id: string) {
    try {
      return await Category.findByPk(id, {
        raw: true,
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  async createItemCategory(title: string) {
    return await Category.create({ title });
  }

  async updateItemCategory(id: string, title: string) {
    let result;
    try {
      result = await Category.update({ title }, { where: { id } });
      if (result[0] === 1) {
        return await Category.findByPk(id, {
          raw: true,
        });
      }
    } catch (error) {
      console.log('error update::', error);
    }
  }

  async deleteItemCategory(id: string) {
    return (await Category.destroy({ where: { id } })) === 1 ? true : false;
  }
}

export let itemCategoriesService: ItemCategoriesService = new ItemCategoriesService();
