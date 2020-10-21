import { itemCategoriesService } from '../../../../shared/services/itemCategories.service';
import { QueryItemCategoryArgs } from '../../../../types';

export let itemCategoryQueryResolver = async (
  parent: any,
  args: QueryItemCategoryArgs,
  context: any,
  info: any,
) => {
  return itemCategoriesService.getItemCategory(args.itemCategoryId);
};
