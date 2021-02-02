import { itemService } from '../../../../shared/services/items.service';
import { QueryItemArgs } from '../../../../types';

export let itemQueryResolver = async (
  parent: any,
  args: QueryItemArgs,
  context: any,
  info: any,
) => {
  return itemService.getItem(args.itemId);
};

export let itemsQueryResolver = async () => {
  return itemService.getItems();
};
