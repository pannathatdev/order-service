const axios = require('axios');
const path = require('path');
const fs = require('fs');

// ระบุเส้นทางสมบูรณ์ของไฟล์ mock-products.json
const mockProductsPath = path.join(__dirname, 'mock-products.json');

// โหลดข้อมูลจากไฟล์ mock-products.json
const mockProductsData = JSON.parse(fs.readFileSync(mockProductsPath, 'utf-8'));

// โหลดข้อมูล orders จากไฟล์ mock-orders.json โดยอยู่ในโฟลเดอร์เดียวกัน
const orders = require('./mock-orders.json');

async function loadMockupData() {
    try {
        // เรียกใช้ service ผ่านชื่อ container ที่กำหนดใน docker-compose.yml
        await axios.post('http://order-service:9000/orders/load', orders);
        console.log('Mockup data loaded successfully.');
    } catch (error) {
        console.error('Failed to load mockup data:', error.message);
    }
}

loadMockupData();