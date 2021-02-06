import { Injectable } from '@nestjs/common';
import { OrderStatus } from './orderStatuses.model';

@Injectable()
export class OrderStatusService {
  async getOrderStatuses() {
    try {
      return await OrderStatus.findAll();
    } catch (error) {
      console.log('error', error);
    }
  }
}
