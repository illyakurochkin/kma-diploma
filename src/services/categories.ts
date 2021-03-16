import {PartialBy} from "fireorm";
import {Category, CategoryRepository} from "../entities/category";

const CategoriesService = {
  async getCategoryById(categoryId: string): Promise<Category | null> {
    return CategoryRepository
      .whereEqualTo('id', categoryId)
      .findOne();
  },

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

  async updateCategory(category: Category): Promise<Category> {
    return CategoryRepository.update(category);
  },

  async deleteCategory(categoryId: string): Promise<void> {
    await CategoryRepository.delete(categoryId);
  },
};

export default CategoriesService;
