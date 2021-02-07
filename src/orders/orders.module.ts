import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './orders.model';
import { OrderResolver } from './orders.resolver';
import { OrderService } from './orders.service';

@Module({
  imports: [SequelizeModule.forFeature([Order])],
  providers: [OrderService, OrderResolver],
})
export class OrdersModule {}
