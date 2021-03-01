import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/roles/roles.decorator';
import { CustomerInput, enumRoles } from 'src/types';
import { CustomerService } from './customers.service';

@Resolver('Customer')
export class CustomerResolver {
  constructor(private customerService: CustomerService) {}

  @Query('customers')
  @UseGuards(LoginGuard)
  async getCustomers() {
    return await this.customerService.getCustomers();
  }

  @Query('customer')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.sales, enumRoles.manager, enumRoles.admin)
  async getCustomer(
    @Args('customerId', ParseIntPipe)
    id: number,
  ) {
    return await this.customerService.getCustomer(id);
  }

  @Mutation('createCustomer')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.manager, enumRoles.admin)
  async create(@Args('input') input: CustomerInput) {
    if (!input) {
      throw new Error('Input Cannot Be Empty');
    } else {
      return await this.customerService.createCustomer(input);
    }
  }

  @Mutation('updateCustomer')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.manager, enumRoles.admin)
  async update(
    @Args('customerId', ParseIntPipe) id: number,
    @Args('input') input: CustomerInput,
  ) {
    return await this.customerService.updateCustomer(id, input);
  }

  @Mutation('deleteCustomer')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.manager, enumRoles.admin)
  async delete(@Args('customerId', ParseIntPipe) id: number) {
    return await this.customerService.deleteCustomer(id);
  }
}
