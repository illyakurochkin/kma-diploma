import {Arg, Mutation, Query, Resolver, Authorized} from "type-graphql";
import {VoidResolver} from 'graphql-scalars';
import {Product} from "../../entities/product";
import {CreateProductInput, GetProductsInput} from "./inputTypes";
import ProductsService from "../../services/products";
import {Role} from "../authorization";

@Resolver()
export default class ProductsResolver {
  @Query(() => String)
  async testQuery(): Promise<String> {
    return Promise.resolve('hello world');
  }

  @Authorized(Role.ADMIN)
  @Query(() => [Product])
  async getProducts(
    @Arg('options', {nullable: true, defaultValue: {}}) options: GetProductsInput
  ): Promise<Product[]> {
    console.log('options', options);
    return ProductsService.getProducts(options);
  }

  @Mutation(() => Product)
  async createProduct(@Arg('options') options: CreateProductInput): Promise<Product> {
    console.log('options', options);
    return ProductsService.createProduct(options);
  }

  @Mutation(() => VoidResolver, {nullable: true})
  async deleteProduct(@Arg('productId') productId: string): Promise<void> {
    return ProductsService.deleteProduct(productId);
  }
}
