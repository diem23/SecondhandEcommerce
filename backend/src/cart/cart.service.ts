import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Cart, CartDocument } from 'src/schema';
import { CreateCartDto } from './dto/create.dto';
import { unSelectedFields } from 'src/types';
import { ProductItemDto } from 'src/common/dto/productItem.dto';

@Injectable()
export class CartService {
    constructor(
        @InjectModel(Cart.name) private cartModel: Model<CartDocument>,
    ) {}

    async createCart(cartData: CreateCartDto, userId: string) {
        const newCartItemsData = cartData.items.map((item: ProductItemDto) => {
            return {
                productId: new Types.ObjectId(item.productId),
                price: item.price,
                quantity: item.quantity,
                useInsurance: item.useInsurance ?? false,
            };
        });

        const cart = new this.cartModel({
            productItems: newCartItemsData,
            userId: new Types.ObjectId(userId),
        });
        await cart.save();

        return {
            cart,
            message: 'Cart successfully created.',
        };
    }

    async getCarts(userId: string) {
        const carts = await this.cartModel.aggregate([
            { $match: { userId: new Types.ObjectId(userId) } },
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'user',
                },
            },
            {
                $lookup: {
                    from: 'products',
                    localField: 'productItems.productId',
                    foreignField: '_id',
                    as: 'products',
                },
            },
            {
                $addFields: {
                    productItems: {
                        $map: {
                            input: '$productItems',
                            as: 'item',
                            in: {
                                productId: '$$item.productId',
                                quantity: '$$item.quantity',
                                price: '$$item.price',
                                useInsurance: '$$item.useInsurance',
                                product: {
                                    $arrayElemAt: [
                                        {
                                            $filter: {
                                                input: '$products',
                                                as: 'product',
                                                cond: {
                                                    $eq: [
                                                        '$$product._id',
                                                        '$$item.productId',
                                                    ],
                                                },
                                            },
                                        },
                                        0,
                                    ],
                                },
                            },
                        },
                    },
                },
            },
            {
                $project: {
                    user: { password: 0, email: 0, ...unSelectedFields },
                    products: 0,
                },
            },
            { $unwind: { path: '$user', preserveNullAndEmptyArrays: true } },
        ]);

        return carts;
    }

    async getCartById(id: string) {
        const cart = await this.cartModel.aggregate([
            { $match: { _id: new Types.ObjectId(id) } },
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'user',
                },
            },
            {
                $lookup: {
                    from: 'products',
                    localField: 'productItems.productId',
                    foreignField: '_id',
                    as: 'products',
                },
            },
            {
                $addFields: {
                    productItems: {
                        $map: {
                            input: '$productItems',
                            as: 'item',
                            in: {
                                productId: '$$item.productId',
                                quantity: '$$item.quantity',
                                price: '$$item.price',
                                useInsurance: '$$item.useInsurance',
                                product: {
                                    $arrayElemAt: [
                                        {
                                            $filter: {
                                                input: '$products',
                                                as: 'product',
                                                cond: {
                                                    $eq: [
                                                        '$$product._id',
                                                        '$$item.productId',
                                                    ],
                                                },
                                            },
                                        },
                                        0,
                                    ],
                                },
                            },
                        },
                    },
                },
            },
            {
                $project: {
                    user: { password: 0, email: 0, ...unSelectedFields },
                    products: 0,
                },
            },
            { $unwind: { path: '$user', preserveNullAndEmptyArrays: true } },
        ]);

        if (!cart || cart.length === 0) {
            throw new NotFoundException(`Cart with ID ${id} not found`);
        }

        return cart[0];
    }

    async updateCart(id: string, cartData: CreateCartDto) {
        console.log(cartData);
        const newCartItemsData = cartData.items.map((item: ProductItemDto) => {
            console.log(item.useInsurance)
            return {
                productId: new Types.ObjectId(item.productId),
                price: item.price,
                quantity: item.quantity,
                useInsurance: item.useInsurance,
            };
        });

        const result = await this.cartModel.findOneAndUpdate(
            { _id: new Types.ObjectId(id) },
            { $set: { productItems: newCartItemsData } },
            { new: true },
        );

        if (!result) {
            throw new NotFoundException(`Cart with ID ${id} not found`);
        }

        const enrichedCart = await this.cartModel.aggregate([
            { $match: { _id: new Types.ObjectId(id) } },
            {
                $lookup: {
                    from: 'products',
                    localField: 'productItems.productId',
                    foreignField: '_id',
                    as: 'products',
                },
            },
            {
                $addFields: {
                    productItems: {
                        $map: {
                            input: '$productItems',
                            as: 'item',
                            in: {
                                productId: '$$item.productId',
                                quantity: '$$item.quantity',
                                price: '$$item.price',
                                useInsurance: '$$item.useInsurance',
                                product: {
                                    $arrayElemAt: [
                                        {
                                            $filter: {
                                                input: '$products',
                                                as: 'product',
                                                cond: {
                                                    $eq: [
                                                        '$$product._id',
                                                        '$$item.productId',
                                                    ],
                                                },
                                            },
                                        },
                                        0,
                                    ],
                                },
                            },
                        },
                    },
                },
            },
            {
                $project: {
                    user: { password: 0, email: 0, ...unSelectedFields },
                    products: 0,
                },
            },
            { $unwind: { path: '$user', preserveNullAndEmptyArrays: true } },
        ]);

        return enrichedCart[0];
    }
}
