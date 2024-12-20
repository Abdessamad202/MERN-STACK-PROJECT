const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
  image: { type: String, required: true },
  team: { type: String, required: true },
  country: { type: String, required: true },
  founded: { type: Number, required: true },
  stadium: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('clubs', ClubSchema);
