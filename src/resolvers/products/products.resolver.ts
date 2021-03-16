import {Arg, Authorized, Mutation, Query, Resolver} from "type-graphql";
import {VoidResolver} from 'graphql-scalars';
import {Role} from "../authorization";
import {Product} from "../../entities/product";
import ProductsService from "../../services/products";
import {CreateProductInput, GetProductsInput} from "./inputTypes";
import {PRODUCT_NOT_FOUND} from "./errorMessages";

@Resolver()
export default class ProductsResolver {
  // TODO remove test query
  @Query(() => String)
  async testQuery(): Promise<String> {
    return Promise.resolve('hello world');
  }

  @Query(() => [Product])
  async getProducts(
    @Arg('options', {nullable: true, defaultValue: {}}) options: GetProductsInput
  ): Promise<Product[]> {
    console.log('options', options);
    return ProductsService.getProducts(options);
  }

  @Query(() => Product)
  async getProductById(@Arg('productId') productId: string): Promise<Product> {
    const product = await ProductsService.getProductById(productId);

    if(!product) {
      throw new Error(PRODUCT_NOT_FOUND);
    }

    return product;
  }

  @Authorized(Role.ADMIN)
  @Mutation(() => Product)
  async createProduct(@Arg('options') options: CreateProductInput): Promise<Product> {
    console.log('options', options);
    return ProductsService.createProduct(options);
  }

  @Authorized(Role.ADMIN)
  @Mutation(() => VoidResolver, {nullable: true})
  async deleteProduct(@Arg('productId') productId: string): Promise<void> {
    const product = await ProductsService.getProductById(productId);

    if(!product) {
      throw new Error(PRODUCT_NOT_FOUND);
    }

    return ProductsService.deleteProduct(productId);
  }
}
