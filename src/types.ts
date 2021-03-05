
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

export interface CustomerInput {
    name?: string;
    phoneNo?: number;
    address?: string;
    city?: string;
}

export interface ItemInput {
    name?: string;
    price?: number;
    discount?: number;
    length?: number;
    weight?: number;
    stock?: number;
    categoryId?: string;
    vendorId?: string;
}

export interface OrderInput {
    total: number;
    discount: number;
    tax: number;
    userId: string;
    items: ItemQuantityInput[];
}

export interface ItemQuantityInput {
    itemId: string;
    quantity: number;
}

export interface IQuery {
    balances(): Balance[] | Promise<Balance[]>;
    getBalanceByCustomer(customerId: string): Balance | Promise<Balance>;
    itemCategories(): ItemCategory[] | Promise<ItemCategory[]>;
    itemCategory(itemCategoryId: string): ItemCategory | Promise<ItemCategory>;
    companies(): Company[] | Promise<Company[]>;
    customers(): Customer[] | Promise<Customer[]>;
    customer(customerId: string): Customer | Promise<Customer>;
    items(): Item[] | Promise<Item[]>;
    item(itemId: string): Item | Promise<Item>;
    orderStatuses(): OrderStatus[] | Promise<OrderStatus[]>;
    orders(): Order[] | Promise<Order[]>;
    getLatestOrder(): Order | Promise<Order>;
    order(orderId: string): Order | Promise<Order>;
    paymentModes(): PaymentMode[] | Promise<PaymentMode[]>;
    roles(): Role[] | Promise<Role[]>;
    units(): Unit[] | Promise<Unit[]>;
    users(): User[] | Promise<User[]>;
    user(userId: string): User | Promise<User>;
    vendors(): Vendor[] | Promise<Vendor[]>;
    vendor(vendorId: string): Vendor | Promise<Vendor>;
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
    createCustomer(input: CustomerInput): Customer | Promise<Customer>;
    updateCustomer(customerId: string, input: CustomerInput): Customer | Promise<Customer>;
    deleteCustomer(customerId: string): boolean | Promise<boolean>;
    createItem(input: ItemInput): Item | Promise<Item>;
    updateItem(itemId: string, input: ItemInput): Item | Promise<Item>;
    deleteItem(itemId: string): boolean | Promise<boolean>;
    login(username: string, password: string): LoginSuccessResponse | Promise<LoginSuccessResponse>;
    saveOrder(input: OrderInput, customerId: string): Order | Promise<Order>;
    savePayment(input: OrderInput, isPrevBalanceIncluded: boolean, paymentModeId: string, previousBalance?: number, customerId?: string): Order | Promise<Order>;
    completePayment(orderId: string, isPrevBalanceIncluded: boolean, paymentModeId: string, customerId: string, net: number, previousBalance?: number): boolean | Promise<boolean>;
    createUser(name: string, email: string, password: string, roleId: string): User | Promise<User>;
    updateUser(userId: string, name?: string, password?: string, roleId?: string): User | Promise<User>;
    deleteUser(userId: string): boolean | Promise<boolean>;
    createVendor(name: string): Vendor | Promise<Vendor>;
    updateVendor(vendorId: string, name: string): Vendor | Promise<Vendor>;
    deleteVendor(vendorId: string): boolean | Promise<boolean>;
}

export interface ItemCategory {
    id: string;
    title: string;
    items?: Item[];
}

export interface Company {
    id: string;
    name: string;
    address: string;
    phoneNo: number;
}

export interface Customer {
    id: string;
    name: string;
    phoneNo: number;
    address: string;
    city: string;
    balance?: Balance;
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
    OrderItem?: OrderItem;
}

export interface OrderItem {
    id: string;
    orderId: string;
    itemId: string;
    quantity: number;
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
    tax: number;
    isPrevBalanceIncluded?: boolean;
    previousBalance?: number;
    net: number;
    customer?: Customer;
    user: User;
    status: OrderStatus;
    paymentMode?: PaymentMode;
    createdAt: number;
    updatedAt: number;
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
