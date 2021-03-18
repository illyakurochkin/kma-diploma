import {Arg, Authorized, FieldResolver, Mutation, Query, Resolver, Root} from "type-graphql";
import {VoidResolver} from 'graphql-scalars';
import {Role} from "../authorization";
import {Order, OrderItem} from "../../entities/order";
import OrdersService from "../../services/orders";
import {CreateOrderInput} from "./inputTypes";
import {ORDER_NOT_FOUND} from "./errorMessages";
import {Product} from "../../entities/product";
import ProductsService from "../../services/products";
import {PRODUCT_NOT_FOUND} from "../products/errorMessages";

@Resolver(() => Order)
export default class OrdersResolver {
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

  @FieldResolver(() => Product)
  async product(@Root() orderItem: OrderItem): Promise<Product> {
    const productField = await ProductsService.getProductById(orderItem.productId);

    if(!productField) {
      throw new Error(PRODUCT_NOT_FOUND);
    }

    return productField;
  }
}
