import { createItemCategoryResolver } from './create-item-category.resolver';
import { deleteItemCategoryResolver } from './delete-item-category.resolver';
import { updateItemCategoryResolver } from './update-item-category.resolver';

export let Mutation = {
  createItemCategory: createItemCategoryResolver,
  updateItemCategory: updateItemCategoryResolver,
  deleteItemCategory: deleteItemCategoryResolver,
};
