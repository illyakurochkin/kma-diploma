import {Arg, Authorized, Mutation, Query, Resolver} from "type-graphql";
import {VoidResolver} from 'graphql-scalars';
import {Role} from "../authorization";
import {Order} from "../../entities/order";
import OrdersService from "../../services/orders";
import {CreateOrderInput} from "./inputTypes";
import {ORDER_NOT_FOUND} from "./errorMessages";

@Resolver()
export default class OrdersResolver {
  // TODO remove test query
  @Query(() => String)
  async testQuery(): Promise<String> {
    return Promise.resolve('hello world');
  }

  @Authorized(Role.ADMIN)
  @Query(() => Order)
  async getOrderById(@Arg('orderId') orderId: string): Promise<Order> {
    const order = await OrdersService.getOrderById(orderId);

    if(!order) {
      throw new Error(ORDER_NOT_FOUND);
    }

    return order;
  }

  @Authorized(Role.ADMIN)
  @Query(() => [Order])
  async getOrders(@Arg('email', {nullable: true}) email?: string): Promise<Order[]> {
    return OrdersService.getOrders(email);
  }

  @Authorized(Role.ADMIN)
  @Mutation(() => VoidResolver)
  async deleteOrder(@Arg('orderId') orderId: string): Promise<void> {
    await OrdersService.deleteOrder(orderId);
  }

  @Mutation(() => Order)
  async createOrder(@Arg('options') options: CreateOrderInput): Promise<Order> {
    return OrdersService.createOrder(options);
  }
}
