import {CompatibleGroup, CompatibleGroupRepository} from "../entities/compatibleGroup";
import {PartialBy} from "fireorm";

const CompatibleGroupsService = {
  async getCompatibleGroups(productId?: string): Promise<CompatibleGroup[]> {
    if(!productId) {
      return CompatibleGroupRepository.find();
    }

    return CompatibleGroupRepository
      .whereArrayContains('productsIds', productId)
      .find();
  },

  async getCompatibleGroupById(compatibleGroupId: string): Promise<CompatibleGroup | null> {
    return CompatibleGroupRepository
      .whereEqualTo('id', compatibleGroupId)
      .findOne();
  },

  async createCompatibleGroup(
    compatibleGroup: PartialBy<CompatibleGroup, 'id'>
  ): Promise<CompatibleGroup> {
    return CompatibleGroupRepository.create(compatibleGroup);
  },

  async updateCompatibleGroup(compatibleGroup: CompatibleGroup): Promise<CompatibleGroup> {
    return CompatibleGroupRepository.update(compatibleGroup);
  },

  async deleteCompatibleGroup(compatibleGroupId: string): Promise<void> {
    await CompatibleGroupRepository.delete(compatibleGroupId);
  },
};

export default CompatibleGroupsService;
