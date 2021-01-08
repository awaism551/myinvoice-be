import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/users.model';
import { UserService } from '../users/users.service';

export interface LoginRequest {
  username: string;
  password: string;
}

@Injectable()
export class AuthService {
  user: User;
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUserFromDb(username: string, password: string): Promise<any> {
    this.user = await this.usersService.getUserByEmail(username);
    // console.log('auth service::validateUser::user::', user.password);
    if (this.user) {
      let result = bcrypt.compareSync(password, this.user.password);
      return result ? this.user : null;
    } else {
      return null;
    }
  }

  async login(user: LoginRequest) {
    // const payload = { username: user.username };
    // console.log('authservice::login::payload', payload);
    return {
      userId: this.user.id.toString(),
      name: this.user.name,
      access_token: this.jwtService.sign(user),
    };
    // console.log('authservice::login::returnObj', returnObj);
  }
}
