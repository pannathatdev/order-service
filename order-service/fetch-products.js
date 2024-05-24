// fetch-products.js

const axios = require('axios');

async function fetchProducts() {
    try {
        const response = await axios.get('http://localhost:8000/products'); // URL ของ endpoint ใน product-service
        const products = response.data;
        console.log('Products:', products);
        return products;
    } catch (error) {
        console.error('Failed to fetch products:', error.message);
        return null;
    }
}

module.exports = fetchProducts;