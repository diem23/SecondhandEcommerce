import { Prop, Schema } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Types } from "mongoose";
import { Product } from "./product.schema";
import { SingleOrder } from "./singleOrder.schema";
import { Type } from "class-transformer";
export enum OrderState {
    ORDERED = 'user',
    PACKED = 'admin',
    DELIVERING = 'delivering',
    DELIVERED = 'delivered',
  }
export type OrderDocument = Order & Document;
@Schema({ timestamps: true })
export class Order {
    @ApiProperty({
        description: 'State of the order',
        example: OrderState.ORDERED,
    })
    @Prop({ default: OrderState.ORDERED })
    state: OrderState

    @ApiProperty({
        description: 'State of payment',
        example: true,
        default: false
    })
    @Prop()
    payment: boolean

    @ApiProperty({
        description: 'Payment method',
        example: 'Qua ngân hàng',
        default: 'Qua ngân hàng'
    })
    @Prop()
    paymentMethod: string

    @ApiProperty({
        description: 'Total price of the order',
        example: 20000,
    })
    @Prop()
    totalPrice: number

    @Prop({ type: Types.ObjectId, ref: SingleOrder.name })
    listOfSingleOrder: SingleOrder[]
}