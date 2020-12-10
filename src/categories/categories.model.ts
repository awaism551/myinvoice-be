import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Category extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'ID',
  })
  id: number;

  @Column
  title: string;
}
