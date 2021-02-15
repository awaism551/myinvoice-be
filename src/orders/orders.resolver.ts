import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { LoginGuard } from 'src/auth/jwt-auth.guard';
import { OrderService } from './orders.service';
@Resolver('Order')
export class OrderResolver {
  constructor(private orderService: OrderService) {}

  @Query('orders')
  @UseGuards(LoginGuard)
  async getOrders() {
    return await this.orderService.getOrders();
  }

  @Query('getLatestOrder')
  @UseGuards(LoginGuard)
  async getLatestOrder() {
    return await this.orderService.getLatestOrder();
  }
}
