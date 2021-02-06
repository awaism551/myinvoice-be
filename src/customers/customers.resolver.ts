import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { LoginGuard } from 'src/auth/jwt-auth.guard';
import { CustomerService } from './customers.service';

@Resolver('Customer')
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query('customers')
  @UseGuards(LoginGuard)
  async getCustomers() {
    return await this.customerService.getCustomers();
  }
}
