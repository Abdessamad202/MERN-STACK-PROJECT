// filepath: /C:/Users/kecha/Documents/MERN-STACK-PROJECT/express/models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
    unique: true,
  },
  publishedDate: {
    type: Date,
    required: true,
  },
  copiesAvailable: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Book', bookSchema);