import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Company extends Model {
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
  address: string;

  @Column
  phoneNo: string;
}
