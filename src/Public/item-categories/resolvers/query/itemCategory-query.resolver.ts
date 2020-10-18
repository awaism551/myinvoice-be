import { itemCategoriesService } from '../../../../shared/services/itemCategories.service';

export let itemCategoryQueryResolver = async (
  parent: any,
  args: { itemCategoryId: number },
  context: any,
  info: any,
) => {
  console.log('getItemCategory::resolver fun::', args);
  return itemCategoriesService.getItemCategory(+args.itemCategoryId);
};
