import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Balance } from './balances.model';
import { BalanceResolver } from './balances.resolver';
import { BalanceService } from './balances.service';

@Module({
  imports: [SequelizeModule.forFeature([Balance])],
  providers: [BalanceService, BalanceResolver],
})
export class BalancesModule {}
