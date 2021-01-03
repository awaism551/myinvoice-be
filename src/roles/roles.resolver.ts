import { Query, Resolver } from '@nestjs/graphql';
import { RoleService } from './roles.service';

@Resolver('Role')
export class RoleResolver {
  constructor(private roleService: RoleService) {}

  @Query('getRoles')
  async getRoles() {
    return await this.roleService.getRoles();
  }
}
