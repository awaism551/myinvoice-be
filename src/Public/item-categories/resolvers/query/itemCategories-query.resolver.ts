import { itemCategoriesService } from '../../../../shared/services/itemCategories.service';

export let itemCategoriesQueryResolver = async () => {
  return itemCategoriesService.getItemCategories();
};
