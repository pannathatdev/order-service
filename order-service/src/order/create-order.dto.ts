export class CreateOrderDto {
    readonly product: string;
    readonly quantity: number;
    readonly status: string;
    readonly customerName: string;
    readonly totalPrice: number;
    // เพิ่ม properties อื่น ๆ ตามต้องการ
}
