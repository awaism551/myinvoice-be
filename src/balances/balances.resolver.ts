import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { LoginGuard } from 'src/auth/jwt-auth.guard';
import { BalanceService } from './balances.service';

@Resolver('Balance')
export class BalanceResolver {
  constructor(private balanceService: BalanceService) {}

  @Query('balances')
  @UseGuards(LoginGuard)
  async getBalances() {
    return await this.balanceService.getBalances();
  }

  @Query('getBalanceByCustomer')
  @UseGuards(LoginGuard)
  async getBalanceByCustomer(
    @Args('customerId', ParseIntPipe)
    customerId: number,
  ) {
    return await this.balanceService.getBalanceByCustomer(customerId);
  }
}
