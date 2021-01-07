import { Injectable } from '@nestjs/common';
// import { User } from './users.model';

export type User = any;
@Injectable()
export class UserService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async getUsers() {
    // try {
    //   return await User.findAll({
    //     include: Role,
    //   });
    // } catch (error) {
    //   console.log('error', error);
    // }
  }

  async getUser(id: number) {
    // try {
    //   return await User.findOne({
    //     where: {
    //       id,
    //     },
    //     include: Role,
    //   });
    // } catch (error) {
    //   console.log('error', error);
    // }
  }

  async createUser(name: string, email: string, roleId: string) {
    // let createdUser = await User.create({ name, email, roleId });
    // return await User.findOne({
    //   where: {
    //     id: createdUser.id,
    //   },
    //   include: Role,
    // });
  }

  async updateUser(id: string, name?: string, roleId?: string) {
    // let affectedRows;
    // try {
    //   affectedRows = await User.update({ name, roleId }, { where: { id } });
    //   if (affectedRows[0] === 1) {
    //     return await User.findOne({
    //       where: {
    //         id,
    //       },
    //       include: Role,
    //     });
    //   }
    // } catch (error) {
    //   console.log('error update::', error);
    // }
  }

  async deleteUser(id: string) {
    // return (await User.destroy({ where: { id } })) === 1 ? true : false;
  }
}
