import * as mongoose from 'mongoose';

export interface Order {
    product: string;
    quantity: number;
    status: string;
    customerName: string;
    totalPrice: number;
}

export const OrderSchema = new mongoose.Schema<Order>({
    product: String,
    quantity: Number,
    status: String,
    customerName: String,
    totalPrice: Number,
});
