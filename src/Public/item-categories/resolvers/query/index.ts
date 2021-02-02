import {
  itemCategoriesQueryResolver,
  itemCategoryQueryResolver,
} from './item-category-query.resolver';

export let Query = {
  itemCategories: itemCategoriesQueryResolver,
  itemCategory: itemCategoryQueryResolver,
};
