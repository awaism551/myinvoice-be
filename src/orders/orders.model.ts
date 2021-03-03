import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Customer } from 'src/customers/customers.model';
import { Item } from 'src/items/items.model';
import { OrderStatus } from 'src/orderStatuses/orderStatuses.model';
import { PaymentMode } from 'src/paymentModes/paymentModes.model';
import { User } from 'src/users/users.model';
import { OrderItem } from './orders_items.model';

@Table
export class Order extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'ID',
  })
  id: number;

  @Column
  total: number;

  @Column
  discount: number;

  @Column
  tax: number;

  @Column
  net: number;

  @ForeignKey(() => Customer)
  @Column({
    allowNull: true,
  })
  customerId: number;
  @BelongsTo(() => Customer)
  customer: Customer;

  @ForeignKey(() => User)
  @Column({
    allowNull: false,
  })
  userId: number;
  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => OrderStatus)
  @Column({
    allowNull: false,
  })
  orderStatusId: number;
  @BelongsTo(() => OrderStatus)
  status: OrderStatus;
  // this value i.e "status" should be matching with value present in respective graphql type i.e "Order"
  // this "status" is name of relationship present between these two entities, this relationship name should be used in graphql

  @ForeignKey(() => PaymentMode)
  @Column({
    allowNull: true,
  })
  paymentModeId: number;
  @BelongsTo(() => PaymentMode)
  paymentMode: PaymentMode;

  @BelongsToMany(() => Item, () => OrderItem)
  items: Item[];
}
