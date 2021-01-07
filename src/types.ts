
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface IQuery {
    itemCategories(): ItemCategory[] | Promise<ItemCategory[]>;
    itemCategory(itemCategoryId: string): ItemCategory | Promise<ItemCategory>;
    items(): Item[] | Promise<Item[]>;
    item(itemId: string): Item | Promise<Item>;
    roles(): Role[] | Promise<Role[]>;
    users(): User[] | Promise<User[]>;
    user(userId: string): User | Promise<User>;
}

export interface IMutation {
    createItemCategory(title: string): ItemCategory | Promise<ItemCategory>;
    updateItemCategory(itemCategoryId: string, title: string): ItemCategory | Promise<ItemCategory>;
    deleteItemCategory(itemCategoryId: string): boolean | Promise<boolean>;
    createItem(name: string, price: number, categoryId: string): Item | Promise<Item>;
    updateItem(itemId: string, name?: string, price?: number, categoryId?: string): Item | Promise<Item>;
    deleteItem(itemId: string): boolean | Promise<boolean>;
    login(username: string, password: string): Token | Promise<Token>;
    createUser(name: string, email: string, password: string, roleId: string): User | Promise<User>;
    updateUser(userId: string, name?: string, password?: string, roleId?: string): User | Promise<User>;
    deleteUser(userId: string): boolean | Promise<boolean>;
}

export interface ItemCategory {
    id: string;
    title: string;
    items?: Item[];
}

export interface Item {
    id: string;
    name: string;
    price: number;
    category: ItemCategory;
}

export interface Token {
    access_token: string;
}

export interface Role {
    id: string;
    name: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: Role;
}
