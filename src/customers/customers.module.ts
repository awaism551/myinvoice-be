import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Customer } from './customers.model';
import { CustomerResolver } from './customers.resolver';
import { CustomerService } from './customers.service';

@Module({
  imports: [SequelizeModule.forFeature([Customer])],
  providers: [CustomerService, CustomerResolver],
})
export class CustomersModule {}
