import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUserFromDb(username: string, password: string): Promise<any> {
    const user = await this.usersService.getUserByEmail(username);
    console.log('auth service::validateUser::user::', user.password);
    if (user) {
      let result = bcrypt.compareSync(password, user.password);
      return result ? user : null;
    } else {
      return null;
    }

    return user ? user : null;
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
