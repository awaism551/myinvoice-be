import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Item } from 'src/items/items.model';

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

  @HasMany(() => Item)
  items: Item[];
}
