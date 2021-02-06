import { Injectable } from '@nestjs/common';
import { PaymentMode } from './paymentModes.model';

@Injectable()
export class PaymentModeService {
  async getPaymentModes() {
    try {
      return await PaymentMode.findAll();
    } catch (error) {
      console.log('error', error);
    }
  }
}
