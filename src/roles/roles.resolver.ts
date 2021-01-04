import { Query, Resolver } from '@nestjs/graphql';
import { RoleService } from './roles.service';

@Resolver('Role')
export class RoleResolver {
  constructor(private roleService: RoleService) {}

  @Query('roles')
  async getRoles() {
    return await this.roleService.getRoles();
  }
}
