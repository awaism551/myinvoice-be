import { Injectable } from '@nestjs/common';
import { CustomerInput } from 'src/types';
import { Customer } from './customers.model';

@Injectable()
export class CustomerService {
  async getCustomers() {
    try {
      return await Customer.findAll();
    } catch (error) {
      console.log('error', error);
    }
  }

  async getCustomer(id: number) {
    try {
      return await Customer.findOne({
        where: {
          id,
        },
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  async createCustomer(input: CustomerInput) {
    return await Customer.create(input);
  }

  async updateCustomer(id: number, input: CustomerInput) {
    let result;
    try {
      result = await Customer.update(input, { where: { id } });
      if (result[0] === 1) {
        return await Customer.findByPk(id);
      }
    } catch (error) {
      console.log('error update::', error);
    }
  }

  async deleteCustomer(id: number) {
    return (await Customer.destroy({ where: { id } })) === 1 ? true : false;
  }
}
