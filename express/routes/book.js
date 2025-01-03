// filepath: /C:/Users/kecha/Documents/MERN-STACK-PROJECT/express/routes/book.js
const express = require('express');
const bookController = require('../controllers/bookController');
const router = express.Router();

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getOneBook);
router.post('/', bookController.createBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;