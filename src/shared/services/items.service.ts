const Item = require('../../../models/index').Item;

class ItemService {
  constructor() {}

  async getItems() {
    try {
      return await Item.findAll({
        raw: true,
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  async getItem(id: string) {
    try {
      return await Item.findByPk(id, {
        raw: true,
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  async createItem(name: string) {
    return await Item.create({ name });
  }

  async updateItem(id: string, name: string) {
    let result;
    try {
      result = await Item.update({ name }, { where: { id } });
      if (result[0] === 1) {
        return await Item.findByPk(id, {
          raw: true,
        });
      }
    } catch (error) {
      console.log('error update::', error);
    }
  }

  async deleteItem(id: string) {
    return (await Item.destroy({ where: { id } })) === 1 ? true : false;
  }
}

export let itemService: ItemService = new ItemService();
