import { itemsQueryResolver, itemQueryResolver } from './item-query.resolver';

export let Query = {
  items: itemsQueryResolver,
  item: itemQueryResolver,
};
