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
  async getVendor(id: number) {
    try {
      return await Vendor.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  async createVendor(name: string) {
    return await Vendor.create({ name });
  }

  async updateVendor(id: number, name: string) {
    let result;
    try {
      result = await Vendor.update({ name }, { where: { id } });
      if (result[0] === 1) {
        return await Vendor.findByPk(id);
      }
    } catch (error) {
      console.log('error update::', error);
    }
  }

  async deleteVendor(id: number) {
    return (await Vendor.destroy({ where: { id } })) === 1 ? true : false;
  }
}
