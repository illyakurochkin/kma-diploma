import {Field, InputType, Int} from "type-graphql";
import {IsEmail} from "class-validator";

@InputType()
class OrderItemInput {
  @Field()
  productId!: string;

  @Field(() => Int)
  amount!: number;
}

@InputType()
export class CreateOrderInput {
  @Field()
  @IsEmail()
  email!: string;

  @Field(() => [OrderItemInput])
  items!: OrderItemInput[];
}

