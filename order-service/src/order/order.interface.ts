// order.interface.ts
import { Document } from 'mongoose';

export interface Order extends Document {
  readonly product: string; // ID ของสินค้าที่สั่งซื้อ
  readonly quantity: number; // จำนวนสินค้าที่สั่งซื้อ
  readonly totalPrice: number; // ราคารวมของคำสั่งซื้อ
  readonly status: string; // สถานะของคำสั่งซื้อ (ยังไม่ได้ชำระเงิน, ชำระเงินแล้ว, จัดส่งแล้ว เป็นต้น)
}
