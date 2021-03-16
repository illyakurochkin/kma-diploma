import {Field, Int, ObjectType} from "type-graphql";
import {Collection, getRepository} from "fireorm";
import {IsEmail} from "class-validator";

@ObjectType()
export class OrderItem {
  @Field()
  productId!: string;

  @Field(() => Int)
  amount!: number;
}

@ObjectType()
@Collection()
export class Order {
  @Field()
  id!: string;

  @Field()
  @IsEmail()
  email!: string;

  @Field()
  date!: Date;

  @Field()
  items!: OrderItem[];
}

export const OrderRepository = getRepository(Order);
