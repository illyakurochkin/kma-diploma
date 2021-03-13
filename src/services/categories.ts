import {Category, CategoryRepository} from "../entities/category";
import {PartialBy} from "fireorm";

const CategoriesService = {
  async getCategories(parentCategoryId?: string): Promise<Category[]> {
    if(!parentCategoryId) {
      return CategoryRepository.find();
    }

    return CategoryRepository
      .whereEqualTo('parentCategoryId', parentCategoryId)
      .find();
  },

  async createCategory(category: PartialBy<Category, 'id'>): Promise<Category> {
    return CategoryRepository.create(category);
  },

  async deleteCategory(categoryId: string): Promise<void> {
    await CategoryRepository.delete(categoryId);
  }
};

export default CategoriesService;
