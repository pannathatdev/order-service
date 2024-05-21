import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './order.interface';
import { CreateOrderDto } from './create-order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectModel('Order') private orderModel: Model<Order>) {}

  async findAll(): Promise<Order[]> {
    return await this.orderModel.find().exec();
  }

  async findOne(id: string): Promise<Order> {
    return await this.orderModel.findById(id).exec();
  }

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const { product, quantity, status } = createOrderDto;
    const totalPrice = this.calculateTotalPrice(product, quantity); // คำนวณราคาทั้งหมดจากสินค้าและปริมาณ
    const newOrder = new this.orderModel({ product, quantity, totalPrice, status });
    return await newOrder.save();
  }

  async delete(id: string): Promise<Order> {
    return await this.orderModel.findOneAndDelete({ _id: id });
  }

  private calculateTotalPrice(product: string, quantity: number): number {
    // ทำการคำนวณราคาทั้งหมดของสินค้าและปริมาณที่ใช้ แล้วส่งค่ากลับ
    // ตัวอย่าง:
    // const productPrice = await this.productService.getProductPrice(product);
    // return productPrice * quantity;
    return 0; // เพียงสำหรับตัวอย่าง เรียกใช้ฟังก์ชันการคำนวณราคาจริงๆ ที่นี่
  }
}
