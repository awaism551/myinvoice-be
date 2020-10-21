import { itemCategoriesService } from '../../../../shared/services/itemCategories.service';
import { MutationDeleteItemCategoryArgs } from '../../../../types';

export let deleteItemCategoryResolver = async (
  parent: any,
  args: MutationDeleteItemCategoryArgs,
  context: any,
  info: any,
) => {
  return itemCategoriesService.deleteItemCategory(args.itemCategoryId);
};
