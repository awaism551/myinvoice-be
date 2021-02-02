import { itemService } from '../../../../shared/services/items.service';
import {
  MutationCreateItemArgs,
  MutationDeleteItemArgs,
  MutationUpdateItemArgs,
} from '../../../../types';

export let createItemResolver = async (
  parent: any,
  args: MutationCreateItemArgs,
  context: any,
) => {
  return itemService.createItem(args.name);
};

export let deleteItemResolver = async (
  parent: any,
  args: MutationDeleteItemArgs,
  context: any,
  info: any,
) => {
  return itemService.deleteItem(args.itemId);
};

export let updateItemResolver = async (
  parent: any,
  args: MutationUpdateItemArgs,
  context: any,
  info: any,
) => {
  return itemService.updateItem(args.itemId, args.name);
};
