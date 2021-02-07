import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Category } from 'src/categories/categories.model';
import { Order } from 'src/orders/orders.model';
import { OrderItem } from 'src/orders/orders_items.model';
import { Vendor } from 'src/vendors/vendors.model';

@Table
export class Item extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'ID',
  })
  id: number;

  @Column
  name: string;

  @Column
  price: number;

  @Column
  discount: number;

  @Column
  length: number;

  @Column
  weight: number;

  @Column
  stock: number;

  @ForeignKey(() => Category)
  @Column({
    allowNull: false,
  })
  categoryId: number;
  @BelongsTo(() => Category)
  category: Category;

  @ForeignKey(() => Vendor)
  @Column({
    allowNull: false,
  })
  vendorId: number;
  @BelongsTo(() => Vendor)
  vendor: Vendor;

  @BelongsToMany(() => Order, () => OrderItem)
  orders: Order[];
}
