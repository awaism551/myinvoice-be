import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Item } from './items.model';
import { ItemResolver } from './items.resolver';
import { ItemsService } from './items.service';

@Module({
  imports: [SequelizeModule.forFeature([Item])],
  providers: [ItemsService, ItemResolver],
})
export class ItemsModule {}
