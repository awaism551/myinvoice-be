import { ItemCategory } from '../../types';

class ItemCategoriesService {
  private itemCategories: ItemCategory[] = [];

  constructor() {
    this.itemCategories = [
      {
        id: '1',
        title: 'drink',
      },
      {
        id: '2',
        title: 'biscuit',
      },
      {
        id: '3',
        title: 'game',
      },
    ];
  }

  getItemCategories() {
    return this.itemCategories;
  }

  getItemCategory(id: string) {
    return this.itemCategories.find((category) => category.id === id);
  }

  createItemCategory(title: string) {
    let newItemCategory: ItemCategory = {
      id: (
        +this.itemCategories[this.itemCategories.length - 1].id + 1
      ).toString(),
      title,
    };
    this.itemCategories.push(newItemCategory);
    return newItemCategory;
  }
}

export let itemCategoriesService: ItemCategoriesService = new ItemCategoriesService();
