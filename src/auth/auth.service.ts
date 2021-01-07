import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    // console.log('auth service::validateUser::user::', user);

    if (user && user.password === pass) {
      const { password, ...result } = user; // es6 syntax to remove property from object
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username };
    // console.log('authservice::login::payload', payload);
    let returnObj = {
      access_token: this.jwtService.sign(payload),
    };
    // console.log('authservice::login::returnObj', returnObj);
    return returnObj;
  }
}
