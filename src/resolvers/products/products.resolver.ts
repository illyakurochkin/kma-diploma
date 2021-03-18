import {Arg, Authorized, FieldResolver, Mutation, Query, Resolver, Root} from "type-graphql";
import {VoidResolver} from 'graphql-scalars';
import {Role} from "../authorization";
import {Product} from "../../entities/product";
import ProductsService from "../../services/products";
import {CreateProductInput, GetProductsInput, UpdateProductInput} from "./inputTypes";
import {PRODUCT_NOT_FOUND} from "./errorMessages";
import {Category} from "../../entities/category";
import CategoriesService from "../../services/categories";

@Resolver(() => Product)
export default class ProductsResolver {
  @Query(() => [Product])
  async getProducts(
    @Arg('options', {nullable: true, defaultValue: {}}) options: GetProductsInput
  ): Promise<Product[]> {
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
    return ProductsService.createProduct(options);
  }

  @Authorized(Role.ADMIN)
  @Mutation(() => Product)
  async updateProduct(@Arg('options') options: UpdateProductInput): Promise<Product> {
    return ProductsService.updateProduct(options);
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

  @FieldResolver(() => [Category])
  async categories(@Root() product: Product): Promise<Category[]> {
    const promises = product.categoriesIds
      .map(async (categoryId: string) => (await CategoriesService.getCategoryById(categoryId))!);

    return Promise.all(promises);
  }
}
