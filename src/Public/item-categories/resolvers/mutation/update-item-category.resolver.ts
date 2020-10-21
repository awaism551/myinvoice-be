import { itemCategoriesService } from '../../../../shared/services/itemCategories.service';
import { MutationUpdateItemCategoryArgs } from '../../../../types';

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
