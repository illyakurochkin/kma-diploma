import {Field, InputType} from "type-graphql";

@InputType()
export class GetCategoriesInput {
  @Field()
  parentCategoryId?: string;
}

@InputType()
export class CreateCategoryInput {
  @Field()
  name!: string;

  @Field()
  description!: string;

  @Field({nullable: true})
  parentCategoryId?: string;
}

