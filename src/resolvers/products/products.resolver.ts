import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {Product} from "../../entities/product";
import {CreateProductInput, GetProductsInput} from "./inputTypes";
import ProductsService from "../../services/products";

@Resolver()
export default class ProductsResolver {
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

  @Mutation(() => Product)
  async createProduct(@Arg('options') options: CreateProductInput): Promise<Product> {
    console.log('options', options);
    return ProductsService.createProduct(options);
  }

  @Mutation(() => [VoidType])
}
