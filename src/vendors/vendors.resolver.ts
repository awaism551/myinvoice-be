import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { LoginGuard } from 'src/auth/jwt-auth.guard';
import { VendorService } from './vendors.service';

@Resolver('Vendor')
export class VendorResolver {
  constructor(private vendorService: VendorService) {}

  @Query('vendors')
  @UseGuards(LoginGuard)
  async getVendors() {
    return await this.vendorService.getVendors();
  }
}
