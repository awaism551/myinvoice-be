import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Unit extends Model {
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
}
