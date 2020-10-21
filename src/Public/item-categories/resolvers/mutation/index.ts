import {
  createItemCategoryResolver,
  deleteItemCategoryResolver,
  updateItemCategoryResolver,
} from './item-category-mutation.resolver';

export let Mutation = {
  createItemCategory: createItemCategoryResolver,
  updateItemCategory: updateItemCategoryResolver,
  deleteItemCategory: deleteItemCategoryResolver,
};
