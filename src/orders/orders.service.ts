import { Injectable } from '@nestjs/common';
import { Customer } from 'src/customers/customers.model';
import { Item } from 'src/items/items.model';
import { OrderStatus } from 'src/orderStatuses/orderStatuses.model';
import { PaymentMode } from 'src/paymentModes/paymentModes.model';
import { User } from 'src/users/users.model';
import { Order } from './orders.model';

@Injectable()
export class OrderService {
  parentModelsArray = [Customer, User, OrderStatus, PaymentMode, Item];

  async getOrders() {
    try {
      return await Order.findAll({
        include: this.parentModelsArray,
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  // async getOrder(id: number) {
  //   try {
  //     return await Order.findOne({
  //       where: {
  //         id,
  //       },
  //       include: this.parentModelsArray,
  //     });
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // }

  // async createOrder(name: string, price: number, categoryId: number) {
  //   let createdOrder = await Order.create({ name, price, categoryId });
  //   return await Order.findOne({
  //     where: {
  //       id: createdOrder.id,
  //     },
  //     include: this.parentModelsArray,
  //   });
  // }

  // async updateOrder(
  //   id: number,
  //   name?: string,
  //   price?: number,
  //   categoryId?: string,
  // ) {
  //   let affectedRows;
  //   try {
  //     affectedRows = await Order.update(
  //       { name, price, categoryId },
  //       { where: { id } },
  //     );
  //     if (affectedRows[0] === 1) {
  //       return await Order.findOne({
  //         where: {
  //           id,
  //         },
  //         include: this.parentModelsArray,
  //       });
  //     }
  //   } catch (error) {
  //     console.log('error update::', error);
  //   }
  // }

  // async deleteOrder(id: number) {
  //   return (await Order.destroy({ where: { id } })) === 1 ? true : false;
  // }
}
