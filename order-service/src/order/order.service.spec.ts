// order.service.spec.ts

// Import สิ่งที่จำเป็น
import { Test, TestingModule } from '@nestjs/testing';
import { OrderService } from './order.service';
import { getModelToken } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.interface';

describe('OrderService', () => {
  let service: OrderService;
  let mockModel: Partial<Model<Order>>;

  beforeEach(async () => {
    // สร้าง mockModel เพื่อทดสอบ OrderService โดยไม่ต้องพึ่งพา MongoDB
    mockModel = {
      find: jest.fn(),
      findById: jest.fn(),
      create: jest.fn(),
      findOneAndDelete: jest.fn(),
      // คุณอาจจะต้องเพิ่ม mock methods ต่าง ๆ ตามความจำเป็น
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrderService,
        {
          provide: getModelToken('Order'), // ใช้ชื่อ string แทนเนื่องจากเราไม่ได้ใช้ Class Order ในการสร้าง Model
          useValue: mockModel,
        },
      ],
    }).compile();

    service = module.get<OrderService>(OrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // เพิ่มเทสเคสเพิ่มเติมตามต้องการ
});
