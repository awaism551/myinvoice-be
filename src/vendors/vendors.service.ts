import { Injectable } from '@nestjs/common';
import { Vendor } from './vendors.model';

@Injectable()
export class VendorService {
  async getVendors() {
    try {
      return await Vendor.findAll();
    } catch (error) {
      console.log('error', error);
    }
  }
}
