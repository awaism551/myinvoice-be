import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/roles/roles.decorator';
import { enumRoles } from 'src/types';
import { VendorService } from './vendors.service';

@Resolver('Vendor')
export class VendorResolver {
  constructor(private vendorService: VendorService) {}

  @Query('vendors')
  @UseGuards(LoginGuard)
  async getVendors() {
    return await this.vendorService.getVendors();
  }

  @Query('vendor')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.sales, enumRoles.manager, enumRoles.admin)
  async getVendor(
    @Args('vendorId', ParseIntPipe)
    id: number,
  ) {
    return await this.vendorService.getVendor(id);
  }

  @Mutation('createVendor')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.manager, enumRoles.admin)
  async create(@Args('name') name: string) {
    return await this.vendorService.createVendor(name);
  }

  @Mutation('updateVendor')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.manager, enumRoles.admin)
  async update(
    @Args('vendorId', ParseIntPipe) id: number,
    @Args('name') name: string,
  ) {
    return await this.vendorService.updateVendor(id, name);
  }

  @Mutation('deleteVendor')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.manager, enumRoles.admin)
  async delete(@Args('vendorId', ParseIntPipe) id: number) {
    return await this.vendorService.deleteVendor(id);
  }
}
