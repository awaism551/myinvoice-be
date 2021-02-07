import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Balance } from 'src/balances/balances.model';
import { Order } from 'src/orders/orders.model';

@Table
export class Customer extends Model {
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
  phoneNo: string;

  @Column
  address: string;

  @Column
  city: string;

  @HasMany(() => Balance)
  balance: Balance[];

  @HasMany(() => Order)
  orders: Order[];
}
