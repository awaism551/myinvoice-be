import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Customer } from 'src/customers/customers.model';

@Table
export class Balance extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'ID',
  })
  id: number;

  @Column({
    allowNull: false,
    defaultValue: 0,
  })
  amount: number;

  @ForeignKey(() => Customer)
  @Column({
    allowNull: false,
  })
  customerId: number;

  @BelongsTo(() => Customer)
  customer: Customer;
}
