import { itemCategoriesQueryResolver } from './itemCategories-query.resolver';
import { itemCategoryQueryResolver } from './itemCategory-query.resolver';

export let Query = {
  itemCategories: itemCategoriesQueryResolver,
  itemCategory: itemCategoryQueryResolver,
};
