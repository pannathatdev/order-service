const axios = require('axios');

async function loadMockupData() {
    try {
        // ใช้ URL ของ Raw ของไฟล์ mock-products.json ใน GitHub repository "product-service"
        const productsUrl = 'https://raw.githubusercontent.com/pannathatdev/product-service/main/src/mock-products.json';

        // ดึงข้อมูลจาก URL ด้วย axios
        const response = await axios.get(productsUrl);
        const products = response.data;

        // เรียกใช้ service ผ่านชื่อ container ที่กำหนดใน docker-compose.yml
        await axios.post('http://host.docker.internal:9000', products);
        console.log('Mockup data loaded successfully.');
    } catch (error) {
        console.error('Failed to load mockup data:', error.message);
    }
}

loadMockupData();