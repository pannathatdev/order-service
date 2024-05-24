import { Controller, Get } from '@nestjs/common';
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
}
