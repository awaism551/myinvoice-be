import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { LoginGuard } from 'src/auth/jwt-auth.guard';
import { CompanyService } from './companies.service';

@Resolver('Company')
export class CompanyResolver {
  constructor(private companyService: CompanyService) {}

  @Query('companies')
  @UseGuards(LoginGuard)
  async getCompanies() {
    return await this.companyService.getCompanies();
  }
}
