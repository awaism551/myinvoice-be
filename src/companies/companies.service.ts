import { Injectable } from '@nestjs/common';
import { Company } from './companies.model';

@Injectable()
export class CompanyService {
  async getCompanies() {
    try {
      return await Company.findAll();
    } catch (error) {
      console.log('error', error);
    }
  }
}
