import {Query, Resolver} from "type-graphql";

@Resolver()
export default class ProductsResolver {
  @Query(() => String)
  async testQuery(): Promise<String> {
    return Promise.resolve('hello world');
  }
}
