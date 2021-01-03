import { Injectable } from '@nestjs/common';
import { Role } from './roles.model';

@Injectable()
export class RoleService {
  async getRoles() {
    try {
      return await Role.findAll();
    } catch (error) {
      console.log('error', error);
    }
  }
}
