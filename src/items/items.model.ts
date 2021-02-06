import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Category } from 'src/categories/categories.model';
import { Vendor } from 'src/vendors/vendors.model';

@Table
export class Item extends Model {
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
  price: number;

  @Column
  discount: number;

  @Column
  length: number;

  @Column
  weight: number;

  @Column
  stock: number;

  @ForeignKey(() => Category)
  @Column({
    allowNull: false,
  })
  categoryId: number;

  @ForeignKey(() => Vendor)
  @Column({
    allowNull: false,
  })
  vendorId: number;

  @BelongsTo(() => Category)
  category: Category;

  @BelongsTo(() => Vendor)
  vendor: Vendor;
}
