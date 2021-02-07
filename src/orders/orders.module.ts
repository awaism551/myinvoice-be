import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './orders.model';
import { OrderResolver } from './orders.resolver';
import { OrderService } from './orders.service';
import { OrderItem } from './orders_items.model';

@Module({
  imports: [SequelizeModule.forFeature([Order, OrderItem])],
  providers: [OrderService, OrderResolver],
})
export class OrdersModule {}
