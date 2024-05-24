import { Body, Controller, Get, Post } from '@nestjs/common';
import axios from 'axios';

@Controller('orders')
export class OrderController {
  constructor() {}

  @Get()
  async findAllOrders(): Promise<any> {
    // เรียกใช้งาน endpoint ของ product-service เพื่อขอข้อมูลสินค้า
    try {
      const response = await axios.get('http://product-service:8000/products');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch products:', error.message);
      throw error;
    }
  }

  @Post('load')
  async loadProducts(@Body() products: any) {
    // ทำการโหลดข้อมูลสินค้าและทำการประมวลผลต่อไปตามต้องการ
    try {
      console.log('Received products:', products);
      // ทำการประมวลผลต่อไปตามต้องการ เช่น บันทึกข้อมูลลงฐานข้อมูล
      return { message: 'Products loaded successfully' };
    } catch (error) {
      console.error('Failed to process products:', error.message);
      throw error;
    }
  }
}
