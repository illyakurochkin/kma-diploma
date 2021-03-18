import {Field, InputType} from "type-graphql";

@InputType()
export class GetProductsInput {
  @Field({nullable: true})
  query?: string;

  @Field({nullable: true})
  minPrice?: number;

  @Field({nullable: true})
  maxPrice?: number;

  @Field(() => [String],
    {nullable: true, defaultValue: []})
  categoriesIds?: string[];


  @Field(() => [String],
    {nullable: true, defaultValue: []})
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
  photo!: string;

  @Field(() => [String],
    {nullable: true, defaultValue: []})
  categoriesIds!: string[];
}

@InputType()
export class UpdateProductInput {
  @Field()
  id!: string;

  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field()
  photo!: string;

  @Field()
  price!: number;

  @Field(() => [String],
    {nullable: true, defaultValue: []})
  categoriesIds!: string[];
}
