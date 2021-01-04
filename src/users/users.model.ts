import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
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

  @Column
  email: string;

  @ForeignKey(() => Role)
  @Column({
    allowNull: false,
  })
  roleId: number;

  @BelongsTo(() => Role)
  role: Role;
}
