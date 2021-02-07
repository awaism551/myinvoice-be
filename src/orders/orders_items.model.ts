import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Item } from 'src/items/items.model';
import { Order } from './orders.model';

@Table({
  tableName: 'OrdersItems',
})
export class OrderItem extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'ID',
  })
  id: number;

  @ForeignKey(() => Order)
  @Column({
    allowNull: false,
  })
  orderId: number;

  @ForeignKey(() => Item)
  @Column({
    allowNull: false,
  })
  itemId: number;
}
