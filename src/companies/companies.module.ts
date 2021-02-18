import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Company } from './companies.model';
import { CompanyResolver } from './companies.resolver';
import { CompanyService } from './companies.service';

@Module({
  imports: [SequelizeModule.forFeature([Company])],
  providers: [CompanyService, CompanyResolver],
})
export class CompaniesModule {}
