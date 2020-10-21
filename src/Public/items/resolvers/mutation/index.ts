import {
  createItemResolver,
  updateItemResolver,
  deleteItemResolver,
} from './item-mutation.resolver';

export let Mutation = {
  createItem: createItemResolver,
  updateItem: updateItemResolver,
  deleteItem: deleteItemResolver,
};
