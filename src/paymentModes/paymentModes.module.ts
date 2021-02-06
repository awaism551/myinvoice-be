import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PaymentMode } from './paymentModes.model';
import { PaymentModeResolver } from './paymentModes.resolver';
import { PaymentModeService } from './paymentModes.service';

@Module({
  imports: [SequelizeModule.forFeature([PaymentMode])],
  providers: [PaymentModeService, PaymentModeResolver],
})
export class PaymentModesModule {}
