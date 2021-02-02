import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { LoginGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/roles/roles.decorator';
import { enumRoles } from 'src/types';
import { UserService } from './users.service';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query('users')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.admin)
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Query('user')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.admin)
  async getUser(
    @Args('userId', ParseIntPipe)
    id: number,
  ) {
    return await this.userService.getUserById(id);
  }

  @Mutation('createUser')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.admin)
  async create(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('roleId') roleId: string,
  ) {
    // handle password confirm logic on the frontend side
    return await this.userService.createUser(name, email, password, roleId);
  }

  @Mutation('updateUser')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.admin)
  async update(
    @Args('userId', ParseIntPipe) id: string,
    @Args('name') name?: string,
    @Args('password') password?: string,
    @Args('roleId') roleId?: string,
  ) {
    if (!name && !roleId && !password) {
      throw new Error(
        'Please provide one of the following fields:Name, enumRoles, Password',
      );
    } else {
      return await this.userService.updateUser(id, name, password, roleId);
    }
  }

  @Mutation('deleteUser')
  @UseGuards(LoginGuard)
  @Roles(enumRoles.admin)
  async delete(@Args('userId', ParseIntPipe) id: string) {
    return await this.userService.deleteUser(id);
  }
}
