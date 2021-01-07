import { Body, UseGuards } from '@nestjs/common';
import { Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from 'src/auth/auth.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@Resolver('Login')
export class LoginResolver {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Mutation('login')
  async login(@Body() user) {
    // console.log('login resolver::login fun::user', user);
    if (user) {
      // user is been checked from db and it is present in the db, now it is time to login this user in firebase auth using firebase-admin
      return this.authService.login(user);
    }
  }
}
