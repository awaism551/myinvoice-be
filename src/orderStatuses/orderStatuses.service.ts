import { Injectable } from '@nestjs/common';
import { Order } from 'src/orders/orders.model';
import { OrderStatus } from './orderStatuses.model';

@Injectable()
export class OrderStatusService {
  async getOrderStatuses() {
    try {
      return await OrderStatus.findAll({
        include: Order,
      });
    } catch (error) {
      console.log('error', error);
    }
  }
}
