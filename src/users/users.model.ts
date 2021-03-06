import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Order } from 'src/orders/orders.model';
import { Role } from 'src/roles/roles.model';

@Table
export class User extends Model {
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

  @Column({
    unique: true,
  })
  email: string;

  @Column
  password: string;

  @ForeignKey(() => Role)
  @Column({
    allowNull: false,
  })
  roleId: number;
  @BelongsTo(() => Role)
  role: Role;

  @HasMany(() => Order)
  orders: Order[];
}
