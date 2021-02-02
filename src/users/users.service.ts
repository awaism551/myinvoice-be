import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { Role } from 'src/roles/roles.model';
import { User } from './users.model';

@Injectable()
export class UserService {
  async getUsers() {
    try {
      return await User.findAll({
        include: Role,
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  async getUserById(id: number) {
    try {
      return await User.findOne({
        where: {
          id,
        },
        include: Role,
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  async getUserByEmail(email: string) {
    try {
      return await User.findOne({
        where: {
          email,
        },
        include: Role,
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  async createUser(
    name: string,
    email: string,
    password: string,
    roleId: string,
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);

    let createdUser = await User.create({
      name,
      email,
      roleId,
      password: hashedPassword,
    });
    return await User.findOne({
      where: {
        id: createdUser.id,
      },
      include: Role,
    });
  }

  async updateUser(
    id: string,
    name?: string,
    password?: string,
    roleId?: string,
  ) {
    let affectedRows;
    let hashedPassword;
    try {
      if (password) {
        hashedPassword = await bcrypt.hash(password, 10);
      }
      affectedRows = await User.update(
        { name, password: hashedPassword, roleId },
        { where: { id } },
      );
      if (affectedRows[0] === 1) {
        return await User.findOne({
          where: {
            id,
          },
          include: Role,
        });
      }
    } catch (error) {
      console.log('error update::', error);
    }
  }

  async deleteUser(id: string) {
    return (await User.destroy({ where: { id } })) === 1 ? true : false;
  }
}
