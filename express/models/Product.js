const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  ref: { type: Number},
  prix: { type: Number },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('products', ProductSchema);
