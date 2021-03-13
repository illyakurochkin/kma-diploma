import {Field, ObjectType} from "type-graphql";
import {Collection, getRepository} from "fireorm";

@ObjectType()
@Collection()
export class Product {
  @Field()
  id!: string;

  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field()
  price!: number;

  @Field(() => [String])
  categoriesIds!: string[];
}

export const ProductRepository = getRepository(Product);
