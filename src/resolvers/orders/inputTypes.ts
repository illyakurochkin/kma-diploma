import {Field, InputType} from "type-graphql";
import {IsEmail} from "class-validator";
import {OrderItem} from "../../entities/order";

@InputType()
export class CreateOrderInput {
  @Field()
  @IsEmail()
  email!: string;

  @Field()
  items!: OrderItem[];
}

