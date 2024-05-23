const axios = require('axios');
const products = require('./mock-products.json');
const orders = require('./mock-orders.json');

async function loadMockupData() {
    try {
        // เรียกใช้ service ผ่านชื่อ container ที่กำหนดใน docker-compose.yml
        await axios.post('http://product-service:8000/products/load', products);
        await axios.post('http://order-service:9000/orders/load', orders);
        console.log('Mockup data loaded successfully.');
    } catch (error) {
        console.error('Failed to load mockup data:', error.message);
    }
}

loadMockupData();