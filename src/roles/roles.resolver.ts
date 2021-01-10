import { UseGuards } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/auth/currentUser.decorator';
import { LoginGuard } from 'src/auth/jwt-auth.guard';
import { User } from 'src/users/users.model';
import { Roles } from './roles.decorator';
import { Role } from './roles.enum';
// import { User } from 'src/users/users.service';
import { RoleService } from './roles.service';

@Resolver('Role')
export class RoleResolver {
  constructor(private roleService: RoleService) {}

  @Query('roles')
  @UseGuards(LoginGuard)
  @Roles(Role.Admin)
  async getRoles(@CurrentUser() user: User) {
    // this user is coming from jwt.strategy.ts::validate function
    // console.log('roles resolver::getRoles fun::user', user.name);
    return await this.roleService.getRoles();
  }
}
