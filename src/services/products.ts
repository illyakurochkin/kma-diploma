import {PartialBy} from "fireorm";
import {Product, ProductRepository} from "../entities/product";
import {GetProductsInput} from "../resolvers/products/inputTypes";


const ProductsService = {
  async getProducts({
    query, minPrice = 0, maxPrice = Number.MAX_VALUE,
    categoriesIds = [], compatibleProductsIds
  }: GetProductsInput): Promise<Product[]> {

    const queryBuilder = ProductRepository
      .whereGreaterOrEqualThan('price', minPrice)
      .whereLessOrEqualThan('price', maxPrice);

    if(categoriesIds.length) {
      queryBuilder.whereArrayContainsAny('categoriesRefs', categoriesIds);
    }

    const products = await queryBuilder.find();

    const filteredProducts = products.filter((product: Product) => {
      return !query || product.name.toLocaleLowerCase().includes(query.toLowerCase());
    })

    console.log('products', filteredProducts);

    return filteredProducts;
  },

  async createProduct(product: PartialBy<Product, 'id'>): Promise<Product> {
    const createdProduct = await ProductRepository.create(product);
    console.log('createdProduct', createdProduct);
    return createdProduct;
  }
};

export default ProductsService;
