// filepath: /C:/Users/kecha/Documents/MERN-STACK-PROJECT/express/controllers/bookController.js
const Book = require('../models/Book');

const bookController = {
  getAllBooks: async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getOneBook: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) return res.status(404).json({ message: 'Book not found' });
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createBook: async (req, res) => {
    const book = new Book(req.body);
    try {
      await book.save();
      res.status(201).json(book);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateBook: async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!book) return res.status(404).json({ message: 'Book not found' });
      res.status(200).json(book);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteBook: async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      if (!book) return res.status(404).json({ message: 'Book not found' });
      res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = bookController;
