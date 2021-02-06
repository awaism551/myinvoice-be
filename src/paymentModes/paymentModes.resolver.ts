import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { LoginGuard } from 'src/auth/jwt-auth.guard';
import { PaymentModeService } from './paymentModes.service';

@Resolver('PaymentMode')
export class PaymentModeResolver {
  constructor(private paymentModeService: PaymentModeService) {}

  @Query('paymentmodes')
  @UseGuards(LoginGuard)
  async getPaymentModes() {
    return await this.paymentModeService.getPaymentModes();
  }
}
