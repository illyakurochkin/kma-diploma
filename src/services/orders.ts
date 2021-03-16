import {PartialBy} from "fireorm";
import {Order, OrderRepository} from "../entities/order";

const OrdersService = {
  async createOrder(order: PartialBy<Order, 'id' | 'date'>): Promise<Order> {
    return OrderRepository.create({...order, date: new Date()});
  },

  async getOrders(email?: string): Promise<Order[]> {
    if(!email) {
      return OrderRepository.find();
    }

    return OrderRepository
      .whereEqualTo('email', email)
      .find();
  },

  async getOrderById(orderId: string): Promise<Order | null> {
    return OrderRepository
      .whereEqualTo('id', orderId)
      .findOne();
  },

  async deleteOrder(orderId: string): Promise<void> {
    await OrderRepository.delete(orderId);
  }
};

export default OrdersService;
