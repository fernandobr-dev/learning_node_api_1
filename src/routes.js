const express = require('express');
const routes = express.Router();

const productController = require('./controllers/ProductController');



// primeira rota
routes.get("/products", productController.index);

// segunda rota
routes.post('/products', productController.store);

// terceira rota
routes.get('/products/:id',productController.show);

// quarta rota
routes.put('/products/:id',productController.update);

// quinta rota
routes.delete('/products/:id', productController.delete);

module.exports = routes;