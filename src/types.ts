
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    itemCategories(): ItemCategory[] | Promise<ItemCategory[]>;
    itemCategory(itemCategoryId: string): ItemCategory | Promise<ItemCategory>;
}

export interface IMutation {
    createItemCategory(title: string): ItemCategory | Promise<ItemCategory>;
    updateItemCategory(itemCategoryId: string, title: string): ItemCategory | Promise<ItemCategory>;
    deleteItemCategory(itemCategoryId: string): boolean | Promise<boolean>;
}

export interface ItemCategory {
    id: string;
    title: string;
}
