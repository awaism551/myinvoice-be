import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import * as EmailValidator from 'email-validator';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';
import { Constants } from './constants';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    // console.log('local strategy::validate fun::username', username);
    // console.log('local strategy::validate fun::password', password);
    // console.log('local.strategy::validate');

    if (!EmailValidator.validate(username)) {
      throw new Error(Constants.usernameNotValidMsg);
    }
    const user = await this.authService.validateUserFromDb(username, password);
    // console.log('local strategy::validate fun::user', user);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
