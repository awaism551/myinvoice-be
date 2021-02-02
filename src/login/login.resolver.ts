import { Body, UseGuards } from '@nestjs/common';
import { Mutation, Resolver } from '@nestjs/graphql';
import { AuthService, LoginRequest } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { Roles } from 'src/roles/roles.decorator';
import { enumRoles } from 'src/types';
@Resolver('Login')
export class LoginResolver {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Mutation('login')
  @Roles(enumRoles.sales, enumRoles.manager, enumRoles.admin)
  async login(@Body() user: LoginRequest) {
    // console.log('login resolver::login fun::user', user);
    if (user) {
      // user is been checked from db and it is present in the db, password provided is also correct, now it is time to login this user
      return this.authService.login(user);
    }
  }
}
