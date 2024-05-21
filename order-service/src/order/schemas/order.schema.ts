import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
    customerName: String,
    totalPrice: Number,
    // เพิ่ม properties อื่น ๆ ตามต้องการ
});
