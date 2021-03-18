import {PartialBy} from "fireorm";
import {Product, ProductRepository} from "../entities/product";
import {GetProductsInput} from "../resolvers/products/inputTypes";
import {CompatibleGroup, CompatibleGroupRepository} from "../entities/compatibleGroup";

const ProductsService = {
  async getProducts({
    query, minPrice = 0, maxPrice = Number.MAX_VALUE,
    categoriesIds = [], compatibleProductsIds = [],
  }: GetProductsInput): Promise<Product[]> {
    const queryBuilder = ProductRepository
      .whereGreaterOrEqualThan('price', minPrice)
      .whereLessOrEqualThan('price', maxPrice);

    if (categoriesIds.length) {
      queryBuilder.whereArrayContainsAny('categoriesIds', categoriesIds);
    }

    if(compatibleProductsIds.length) {
      const compatibleGroups = await CompatibleGroupRepository
        .whereArrayContainsAny('productsIds', compatibleProductsIds)
        .find();

      const productsIds = [...new Set(
        compatibleGroups.reduce((accumulator: string[], compatibleGroup: CompatibleGroup) => [
          ...accumulator,
          ...compatibleGroup.productsIds
        ], [])
      )];

      queryBuilder.whereIn('id', productsIds);
    }

    const products = await queryBuilder.find();

    return products.filter((product: Product) => {
      return !query || product.name.toLocaleLowerCase().includes(query.toLowerCase());
    })
  },

  async getProductById(productId: string): Promise<Product | null> {
    return ProductRepository
      .whereEqualTo('id', productId)
      .findOne();
  },

  async createProduct(product: PartialBy<Product, 'id'>): Promise<Product> {
    return ProductRepository.create(product);
  },

  async updateProduct(product: Product): Promise<Product> {
    return ProductRepository.update(product);
  },

  async deleteProduct(productId: string): Promise<void> {
    await ProductRepository.delete(productId);
  }
};

export default ProductsService;
