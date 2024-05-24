import { Body, Controller, Get, Post } from '@nestjs/common';
import axios from 'axios';

@Controller('orders')
export class OrderController {
  constructor() {}

  @Get()
  async findAllOrders(): Promise<any> {
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
    try {
      console.log('Received products:', products);
      return { message: 'Products loaded successfully' };
    } catch (error) {
      console.error('Failed to process products:', error.message);
      throw error;
    }
  }
}
