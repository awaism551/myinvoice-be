import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { LoginGuard } from 'src/auth/jwt-auth.guard';
import { OrderStatusService } from './orderStatuses.service';

@Resolver('OrderStatus')
export class OrderStatusResolver {
  constructor(private orderStatusService: OrderStatusService) {}

  @Query('orderStatuses')
  @UseGuards(LoginGuard)
  async getOrderStatuss() {
    return await this.orderStatusService.getOrderStatuses();
  }
}
