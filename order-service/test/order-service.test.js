const request = require('supertest');
const app = require('../src/app');

describe('Order Service', () => {
    it('should return order list', async() => {
        const res = await request(app).get('/orders');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(2);
        expect(res.body[0]).toHaveProperty('orderId', '101');
        expect(res.body[0]).toHaveProperty('productId', '1');
    });
});