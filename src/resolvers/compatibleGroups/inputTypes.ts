import {Field, InputType} from "type-graphql";

@InputType()
export class CreateCompatibleGroupInput {
  @Field()
  description!: string;

  @Field(() => [String])
  productsIds!: string[];
}

@InputType()
export class UpdateCompatibleGroupInput {
  @Field()
  id!: string;

  @Field()
  description!: string;

  @Field(() => [String])
  productsIds!: string[];
}
