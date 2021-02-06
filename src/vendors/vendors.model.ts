import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { Item } from 'src/items/items.model';

@Table
export class Vendor extends Model {
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

  @HasMany(() => Item)
  items: Item[];
}
