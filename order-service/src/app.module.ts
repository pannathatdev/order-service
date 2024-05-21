import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from './order/order.module';

@Module({
    imports: [
        MongooseModule.forRoot("mongodb+srv://pipo:Aa123654@pipo.gqdqli4.mongodb.net/order"),
        OrderModule,
    ],
})
export class AppModule {}
