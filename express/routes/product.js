const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('/', productController.getAllProducts);
router.post('/', productController.createProduct);
router.put('/:ref', productController.updateProduct);
router.delete('/:ref', productController.deleteProduct);

module.exports = router;
