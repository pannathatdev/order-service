import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
    product : String,
    quantity : Number,
    status : String,
    customerName: String,
    totalPrice: Number,

});
