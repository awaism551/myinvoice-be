import { itemCategoriesService } from '../../../../shared/services/itemCategories.service';
import { MutationCreateItemCategoryArgs } from '../../../../types';
import { MutationDeleteItemCategoryArgs } from '../../../../types';
import { MutationUpdateItemCategoryArgs } from '../../../../types';

export let createItemCategoryResolver = async (
  parent: any,
  args: MutationCreateItemCategoryArgs,
  context: any,
) => {
  return itemCategoriesService.createItemCategory(args.title);
};

export let deleteItemCategoryResolver = async (
  parent: any,
  args: MutationDeleteItemCategoryArgs,
  context: any,
  info: any,
) => {
  return itemCategoriesService.deleteItemCategory(args.itemCategoryId);
};

export let updateItemCategoryResolver = async (
  parent: any,
  args: MutationUpdateItemCategoryArgs,
  context: any,
  info: any,
) => {
  return itemCategoriesService.updateItemCategory(
    args.itemCategoryId,
    args.title,
  );
};
