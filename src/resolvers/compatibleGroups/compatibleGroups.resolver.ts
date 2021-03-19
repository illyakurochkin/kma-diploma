import {Arg, Authorized, FieldResolver, Mutation, Query, Resolver, Root} from "type-graphql";
import {VoidResolver} from 'graphql-scalars';
import {Role} from "../authorization";
import {Product} from "../../entities/product";
import ProductsService from "../../services/products";
import {CompatibleGroup} from "../../entities/compatibleGroup";
import CompatibleGroupsService from "../../services/compatibleGroups";
import {CreateCompatibleGroupInput, UpdateCompatibleGroupInput} from "./inputTypes";
import {COMPATIBLE_GROU__NOT_FOUND} from "./errorMessages";

@Resolver(() => CompatibleGroup)
export default class CompatibleGroupsResolver {
  @Authorized(Role.ADMIN)
  @Query(() => CompatibleGroup)
  async getCompatibleGroupById(
    @Arg('compatibleGroupId') compatibleGroupId: string
  ): Promise<CompatibleGroup> {
    const compatibleGroup = await CompatibleGroupsService
      .getCompatibleGroupById(compatibleGroupId);

    if(!compatibleGroup) {
      throw new Error(COMPATIBLE_GROU__NOT_FOUND);
    }

    return compatibleGroup;
  }

  @Authorized(Role.ADMIN)
  @Query(() => [CompatibleGroup])
  async getCompatibleGroups(
    @Arg('productId', {nullable: true}) productId?: string
  ): Promise<CompatibleGroup[]> {
    return CompatibleGroupsService.getCompatibleGroups(productId);
  }

  @Authorized(Role.ADMIN)
  @Mutation(() => VoidResolver)
  async deleteCompatibleGroup(
    @Arg('compatibleGroupId') compatibilityGroupId: string
  ): Promise<void> {
    await CompatibleGroupsService.deleteCompatibleGroup(compatibilityGroupId);
  }

  @Authorized(Role.ADMIN)
  @Mutation(() => CompatibleGroup)
  async createCompatibleGroup(
    @Arg('options') options: CreateCompatibleGroupInput
  ): Promise<CompatibleGroup> {
    return CompatibleGroupsService.createCompatibleGroup(options);
  }

  @Authorized(Role.ADMIN)
  @Mutation(() => CompatibleGroup)
  async updateCompatibleGroup(
    @Arg('options') options: UpdateCompatibleGroupInput
  ): Promise<CompatibleGroup> {
    return CompatibleGroupsService.updateCompatibleGroup(options);
  }

  @Authorized(Role.ADMIN)
  @FieldResolver(() => [Product])
  async products(@Root() compatibleGroup: CompatibleGroup): Promise<Product[]> {
    const promises = compatibleGroup.productsIds
      .map(async (productId: string) => (await ProductsService.getProductById(productId))!);

    return Promise.all(promises);
  }
}
