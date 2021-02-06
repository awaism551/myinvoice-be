import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrderStatus } from './orderStatuses.model';
import { OrderStatusResolver } from './orderStatuses.resolver';
import { OrderStatusService } from './orderStatuses.service';

@Module({
  imports: [SequelizeModule.forFeature([OrderStatus])],
  providers: [OrderStatusService, OrderStatusResolver],
})
export class OrderStatusesModule {}
