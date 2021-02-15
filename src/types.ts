
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum enumRoles {
    admin = "admin",
    manager = "manager",
    sales = "sales"
}

export interface IQuery {
    balances(): Balance[] | Promise<Balance[]>;
    itemCategories(): ItemCategory[] | Promise<ItemCategory[]>;
    itemCategory(itemCategoryId: string): ItemCategory | Promise<ItemCategory>;
    customers(): Customer[] | Promise<Customer[]>;
    items(): Item[] | Promise<Item[]>;
    item(itemId: string): Item | Promise<Item>;
    orderStatuses(): OrderStatus[] | Promise<OrderStatus[]>;
    orders(): Order[] | Promise<Order[]>;
    getLatestOrder(): Order | Promise<Order>;
    paymentModes(): PaymentMode[] | Promise<PaymentMode[]>;
    roles(): Role[] | Promise<Role[]>;
    units(): Unit[] | Promise<Unit[]>;
    users(): User[] | Promise<User[]>;
    user(userId: string): User | Promise<User>;
    vendors(): Vendor[] | Promise<Vendor[]>;
}

export interface Balance {
    id: string;
    amount: number;
    customer: Customer;
}

export interface IMutation {
    createItemCategory(title: string): ItemCategory | Promise<ItemCategory>;
    updateItemCategory(itemCategoryId: string, title: string): ItemCategory | Promise<ItemCategory>;
    deleteItemCategory(itemCategoryId: string): boolean | Promise<boolean>;
    createItem(name: string, price: number, categoryId: string): Item | Promise<Item>;
    updateItem(itemId: string, name?: string, price?: number, categoryId?: string): Item | Promise<Item>;
    deleteItem(itemId: string): boolean | Promise<boolean>;
    login(username: string, password: string): LoginSuccessResponse | Promise<LoginSuccessResponse>;
    createUser(name: string, email: string, password: string, roleId: string): User | Promise<User>;
    updateUser(userId: string, name?: string, password?: string, roleId?: string): User | Promise<User>;
    deleteUser(userId: string): boolean | Promise<boolean>;
}

export interface ItemCategory {
    id: string;
    title: string;
    items?: Item[];
}

export interface Customer {
    id: string;
    name: string;
    phoneNo: number;
    address: string;
    city: string;
}

export interface Item {
    id: string;
    name: string;
    price: number;
    discount: number;
    length: number;
    weight: number;
    stock: number;
    category: ItemCategory;
    vendor: Vendor;
}

export interface LoginSuccessResponse {
    userId: string;
    name: string;
    role: Role;
    access_token: string;
}

export interface OrderStatus {
    id: string;
    name: string;
}

export interface Order {
    id: string;
    total: number;
    discount: number;
    net: number;
    customer?: Customer;
    user: User;
    status: OrderStatus;
    paymentMode?: PaymentMode;
    items: Item[];
}

export interface PaymentMode {
    id: string;
    name: string;
}

export interface Role {
    id: string;
    name: string;
}

export interface Unit {
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

export interface Vendor {
    id: string;
    name: string;
}
