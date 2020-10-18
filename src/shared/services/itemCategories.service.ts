interface ItemCategory {
  id: number;
  title: string;
}

class ItemCategoriesService {
  private itemCategories: ItemCategory[] = [];

  constructor() {
    console.log('item categories class constructor');
    this.itemCategories = [
      {
        id: 1,
        title: 'drink',
      },
      {
        id: 2,
        title: 'biscuit',
      },
      {
        id: 3,
        title: 'game',
      },
    ];
  }
  getItemCategories() {
    return this.itemCategories;
  }

  getItemCategory(id: number) {
    console.log('getItemCategory::service::', id);

    return this.itemCategories.find((category) => category.id === id);
  }
}

export let itemCategoriesService: ItemCategoriesService = new ItemCategoriesService();
