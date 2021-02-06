import { Injectable } from '@nestjs/common';
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
}
