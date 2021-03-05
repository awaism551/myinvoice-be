import { Injectable } from '@nestjs/common';
import { Customer } from 'src/customers/customers.model';
import { Balance } from './balances.model';

@Injectable()
export class BalanceService {
  async getBalances() {
    try {
      return await Balance.findAll({
        include: [Customer],
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  async getBalanceByCustomer(customerId: number) {
    try {
      return await Balance.findOne({
        include: [Customer],
        where: {
          customerId,
        },
      });
    } catch (error) {
      console.log('error', error);
    }
  }
}
