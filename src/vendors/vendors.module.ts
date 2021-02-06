import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Vendor } from './vendors.model';
import { VendorResolver } from './vendors.resolver';
import { VendorService } from './vendors.service';

@Module({
  imports: [SequelizeModule.forFeature([Vendor])],
  providers: [VendorService, VendorResolver],
})
export class VendorsModule {}
