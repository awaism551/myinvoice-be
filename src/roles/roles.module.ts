import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './roles.model';
import { RoleResolver } from './roles.resolver';
import { RoleService } from './roles.service';

@Module({
  imports: [SequelizeModule.forFeature([Role])],
  providers: [RoleService, RoleResolver],
})
export class RolesModule {}
