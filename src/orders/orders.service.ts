import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { Balance } from 'src/balances/balances.model';
import { Customer } from 'src/customers/customers.model';
import { Item } from 'src/items/items.model';
import { OrderStatus } from 'src/orderStatuses/orderStatuses.model';
import { PaymentMode } from 'src/paymentModes/paymentModes.model';
import { OrderInput } from 'src/types';
import { User } from 'src/users/users.model';
import { Order } from './orders.model';
import { OrderItem } from './orders_items.model';
@Injectable()
export class OrderService {
  constructor(private sequelize: Sequelize) {}
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

  async getLatestOrder() {
    try {
      return await Order.findOne({
        order: [['id', 'DESC']],
        include: this.parentModelsArray,
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  async getOrder(id: number) {
    try {
      return await Order.findOne({
        where: {
          id,
        },
        include: [{ all: true, nested: true }],
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  async saveOrder(input: OrderInput, customerId: number) {
    try {
      return await this.sequelize.transaction(async (t) => {
        let savedOrder = await Order.create(
          {
            ...input,
            net: input.total + input.tax - input.discount,
            customerId,
            orderStatusId: 1, // set to "PENDING"
          },
          {
            transaction: t,
          },
        );

        await input.items.forEach(async (item) => {
          await OrderItem.bulkCreate(
            [
              {
                itemId: item.itemId,
                orderId: savedOrder.id,
                quantity: item.quantity,
              },
            ],
            {
              transaction: t,
            },
          );
        });

        return await Order.findOne({
          order: [['id', 'DESC']],
          include: this.parentModelsArray,
          transaction: t,
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  async savePayment(
    input: OrderInput,
    isPrevBalanceIncluded: boolean,
    paymentModeId: number,
    previousBalance: number = 0,
    customerId?: number,
  ) {
    try {
      let netAmount =
        input.total + input.tax + previousBalance - input.discount;
      return await this.sequelize.transaction(async (t) => {
        let savedOrder = await Order.create(
          {
            ...input,
            net: netAmount,
            customerId,
            isPrevBalanceIncluded,
            previousBalance,
            orderStatusId: 2, // set to "DELIVERED",
            paymentModeId,
          },
          {
            transaction: t,
          },
        );

        await input.items.forEach(async (item) => {
          await OrderItem.bulkCreate(
            [
              {
                itemId: item.itemId,
                orderId: savedOrder.id,
                quantity: item.quantity,
              },
            ],
            {
              transaction: t,
            },
          );
        });

        if (paymentModeId === 2) {
          // CREDIT PAYMENT, NEEDS TO SAVE IN BALANCES SECTION
          let existingBalance = await Balance.findOne({
            where: {
              customerId,
            },
            transaction: t,
          });
          if (!existingBalance) {
            await Balance.create(
              {
                customerId,
                amount: netAmount,
              },
              {
                transaction: t,
              },
            );
          } else {
            await Balance.update(
              {
                amount: netAmount,
              },
              {
                where: {
                  customerId,
                },
                transaction: t,
              },
            );
          }
        }

        if (paymentModeId === 1 && isPrevBalanceIncluded) {
          // CASH PAYMENT, AND CUSTOMER HAS ALSO CLEARED PREVIOUS PAYMENT
          // SO NEED TO CLEAR CUSTOMER PREVIOUS BALANCE
          await Balance.destroy({ where: { customerId }, transaction: t });
        }

        return await Order.findOne({
          order: [['id', 'DESC']],
          include: this.parentModelsArray,
          transaction: t,
        });
      });
    } catch (err) {
      console.log(err);
    }
  }

  async completePayment(
    orderId: number,
    isPrevBalanceIncluded: boolean,
    paymentModeId: number,
    customerId: number,
    net: number,
    previousBalance?: number,
  ) {
    try {
      return await this.sequelize.transaction(async (t) => {
        let order = await Order.update(
          {
            orderStatusId: 2, // DELIVERED
            paymentModeId,
            isPrevBalanceIncluded,
            previousBalance,
            net,
          },
          {
            where: {
              id: orderId,
            },
            transaction: t,
          },
        );

        if (paymentModeId === 2) {
          // CREDIT PAYMENT, NEEDS TO SAVE IN BALANCES SECTION
          let existingBalance = await Balance.findOne({
            where: {
              customerId,
            },
            transaction: t,
          });
          if (!existingBalance) {
            await Balance.create(
              {
                customerId,
                amount: net,
              },
              {
                transaction: t,
              },
            );
          } else {
            await Balance.update(
              {
                amount: net,
              },
              {
                where: {
                  customerId,
                },
                transaction: t,
              },
            );
          }
        }

        if (paymentModeId === 1 && isPrevBalanceIncluded) {
          // CASH PAYMENT, AND CUSTOMER HAS ALSO CLEARED PREVIOUS PAYMENT
          // SO NEED TO CLEAR CUSTOMER PREVIOUS BALANCE
          await Balance.destroy({ where: { customerId }, transaction: t });
        }

        return order ? true : false;
      });
    } catch (error) {
      console.log('error complete payment::', error);
    }
  }
}
