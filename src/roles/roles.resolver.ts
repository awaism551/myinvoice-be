import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { LoginGuard } from 'src/auth/jwt-auth.guard';
import { enumRoles } from 'src/types';
import { Roles } from './roles.decorator';
import { RoleService } from './roles.service';

@Resolver('enumRoles')
export class RoleResolver {
  constructor(private roleService: RoleService) {}

  @Query('roles')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.Admin)
  async getRoles() {
    // this user is coming from jwt.strategy.ts::validate function
    // console.log('roles resolver::getRoles fun::user', user.name);
    return await this.roleService.getRoles();
  }
}
