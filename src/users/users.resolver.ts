import { ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './users.service';

@Resolver('User')
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query('users')
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Query('user')
  async getUser(
    @Args('userId', ParseIntPipe)
    id: number,
  ) {
    return await this.userService.getUser(id);
  }

  @Mutation('createUser')
  async create(
    @Args('name') name: string,
    @Args('email') email: string,
    @Args('roleId') roleId: string,
  ) {
    return await this.userService.createUser(name, email, roleId);
  }

  @Mutation('updateUser')
  async update(
    @Args('userId', ParseIntPipe) id: string,
    @Args('name') name?: string,
    @Args('roleId') roleId?: string,
  ) {
    if (!name && !roleId) {
      throw new Error('Please provide one of the following fields:Name, Role');
    } else {
      return await this.userService.updateUser(id, name, roleId);
    }
  }

  @Mutation('deleteUser')
  async delete(@Args('userId', ParseIntPipe) id: string) {
    return await this.userService.deleteUser(id);
  }
}
