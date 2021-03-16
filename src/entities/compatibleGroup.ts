import {Field, ObjectType} from "type-graphql";
import {Collection, getRepository} from "fireorm";

@ObjectType()
@Collection()
export class CompatibleGroup {
  @Field()
  id!: string;

  @Field()
  description!: string;

  @Field(() => [String])
  productsIds!: string[];
}

export const CompatibleGroupRepository = getRepository(CompatibleGroup);
