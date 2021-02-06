import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Unit } from './units.model';
import { UnitResolver } from './units.resolver';
import { UnitService } from './units.service';

@Module({
  imports: [SequelizeModule.forFeature([Unit])],
  providers: [UnitService, UnitResolver],
})
export class UnitsModule {}
