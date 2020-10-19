import { itemCategoriesService } from '../../../../shared/services/itemCategories.service';
import { MutationCreateItemCategoryArgs } from '../../../../types';

export let createItemCategoryResolver = async (
  parent: any,
  args: MutationCreateItemCategoryArgs,
  context: any,
) => {
  return itemCategoriesService.createItemCategory(args.title);
};
