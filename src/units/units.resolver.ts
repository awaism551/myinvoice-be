import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { LoginGuard } from 'src/auth/jwt-auth.guard';
import { UnitService } from './units.service';

@Resolver('Unit')
export class UnitResolver {
  constructor(private unitService: UnitService) {}

  @Query('units')
  @UseGuards(LoginGuard)
  async getUnits() {
    return await this.unitService.getUnits();
  }
}
