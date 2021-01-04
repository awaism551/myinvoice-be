import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Item } from './items.model';
import { ItemResolver } from './items.resolver';
import { ItemService } from './items.service';

@Module({
  imports: [SequelizeModule.forFeature([Item])],
  providers: [ItemService, ItemResolver],
})
export class ItemsModule {}
