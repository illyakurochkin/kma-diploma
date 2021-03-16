import {Arg, Authorized, Mutation, Query, Resolver} from "type-graphql";
import {VoidResolver} from 'graphql-scalars';
import {Role} from "../authorization";
import {Category} from "../../entities/category";
import CategoriesService from "../../services/categories";
import {CreateCategoryInput, GetCategoriesInput, UpdateCategoryInput} from "./inputTypes";
import {CATEGORY_NOT_FOUNT} from "./errorMessages";

@Resolver()
export default class CategoriesResolver {
  @Query(() => [Category])
  async getCategories(
    @Arg('options', {nullable: true, defaultValue: {}}) options: GetCategoriesInput
  ): Promise<Category[]> {
    console.log('options', options);
    return CategoriesService.getCategories(options.parentCategoryId);
  }

  @Query(() => Category)
  async getCategoryById(@Arg('categoryId') categoryId: string): Promise<Category> {
    const category = await CategoriesService.getCategoryById(categoryId);

    if (!category) {
      throw new Error(CATEGORY_NOT_FOUNT);
    }

    return category;
  }

  @Authorized(Role.ADMIN)
  @Mutation(() => Category)
  async createCategory(@Arg('options') options: CreateCategoryInput): Promise<Category> {
    console.log('options', options);
    return CategoriesService.createCategory(options);
  }

  @Authorized(Role.ADMIN)
  @Mutation(() => Category)
  async updateCategory(@Arg('options') options: UpdateCategoryInput): Promise<Category> {
    return CategoriesService.updateCategory(options);
  }

  @Authorized(Role.ADMIN)
  @Mutation(() => VoidResolver, {nullable: true})
  async deleteCategory(@Arg('categoryId') categoryId: string): Promise<void> {
    return CategoriesService.deleteCategory(categoryId);
  }
}
