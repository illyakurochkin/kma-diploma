import {Field, ObjectType} from "type-graphql";
import {Collection, getRepository} from "fireorm";

@ObjectType()
@Collection()
export class Category {
  @Field()
  id!: string;

  @Field({nullable: true})
  parentCategoryId?: string;

  @Field()
  name!: string;

  @Field()
  description!: string;
}

export const CategoryRepository = getRepository(Category);
