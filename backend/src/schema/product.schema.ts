import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { User } from './users.schema';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
    @ApiProperty({
        description: 'The name of the product',
        example: 'Organic Shampoo',
    })
    @Prop({ required: true })
    productName: string;

    @ApiProperty({
        description: 'The brand of the product',
        example: 'Herbal Essences',
    })
    @Prop({ required: true })
    brand: string;

    @ApiProperty({
        description: 'The type/category of the product',
        example: 'Shampoo',
    })
    @Prop()
    type: string;

    @ApiProperty({
        description: 'Whether the product applies to standout selling',
        example: true,
        default: false,
    })
    @Prop()
    applyStandOutSelling: boolean;

    @ApiProperty({
        description: 'Whether the product applies to professional selling',
        example: false,
        default: false,
    })
    @Prop()
    applyProfessionallySelling: boolean;

    @ApiProperty({
        description: 'The state or condition of the product',
        example: 'New',
    })
    @Prop()
    state: string;

    @ApiProperty({
        description: 'The price of the product in cents',
        example: 1999,
    })
    @Prop()
    price: number;

    @ApiProperty({
        description: 'The available quantity of the product',
        example: 100,
    })
    @Prop()
    quantity: number;

    @ApiProperty({ description: 'The number of items sold', example: 20 })
    @Prop()
    soldQuantity: number;

    @ApiProperty({
        description: 'The color of the product',
        example: 'Red',
        required: false,
    })
    @Prop()
    color: string;

    @ApiProperty({
        description: 'The size of the product in specific units (e.g., inches)',
        example: 10.5,
        required: false,
    })
    @Prop()
    size: number;

    @ApiProperty({
        description: 'The weight of the product in grams',
        example: 500,
        required: false,
    })
    @Prop()
    weight: number;

    @ApiProperty({
        description: 'A detailed description of the product',
        example: 'A sulfate-free shampoo for dry and damaged hair',
        required: false,
    })
    @Prop()
    description: string;

    @ApiProperty({
        description: 'Whether the product is deleted or not',
        example: false,
        default: false,
    })
    @Prop({ default: false })
    isDel: boolean;

    @Prop({ type: Types.ObjectId, ref: User.name })
    @Type(() => User)
    userId: string;

    @ApiProperty({
        description: 'URLs of images for the product',
        example: ['http://example.com/image1.jpg'],
    })
    @Prop()
    images: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
