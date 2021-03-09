import {Field, InputType} from "type-graphql";

@InputType()
export class GetProductsInput {
  @Field({nullable: true})
  query?: string;

  @Field({nullable: true})
  minPrice?: number;

  @Field({nullable: true})
  maxPrice?: number;

  @Field({nullable: true, defaultValue: []})
  categoriesIds?: string[];

  @Field({nullable: true, defaultValue: []})
  compatibleProductsIds?: string[];
}

@InputType()
export class CreateProductInput {
  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field()
  price!: number;

  @Field()
  categoryIds!: string[];
}
