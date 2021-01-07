import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    // console.log('local strategy::validate fun::username', username);
    // console.log('local strategy::validate fun::password', password);

    const user = await this.authService.validateUser(username, password);
    // console.log('local strategy::validate fun::user', user);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
