import {Arg, Mutation, Query, Resolver} from "type-graphql";
import {VoidResolver} from 'graphql-scalars';
import {CreateCategoryInput, GetCategoriesInput} from "./inputTypes";
import ProductsService from "../../services/products";
import {Category} from "../../entities/category";
import CategoriesService from "../../services/categories";

@Resolver()
export default class CategoriesResolver {
  @Query(() => [Category])
  async getCategories(
    @Arg('options', {nullable: true, defaultValue: {}}) options: GetCategoriesInput
  ): Promise<Category[]> {
    console.log('options', options);
    return CategoriesService.getCategories(options.parentCategoryId);
  }

  @Mutation(() => Category)
  async createCategory(@Arg('options') options: CreateCategoryInput): Promise<Category> {
    console.log('options', options);
    return CategoriesService.createCategory(options);
  }

  @Mutation(() => VoidResolver, {nullable: true})
  async deleteProduct(@Arg('productId') productId: string): Promise<void> {
    return ProductsService.deleteProduct(productId);
  }
}
