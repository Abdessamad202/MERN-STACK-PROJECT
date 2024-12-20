const Club = require('../models/Club');

const clubController = {
  getAllClubs: async (req, res) => {
    try {
      const clubs = await Club.find();
      res.status(200).json(clubs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  createClub: async (req, res) => {
    try {
      const club = new Club(req.body);
      await club.save();
      res.status(201).json(club);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  updateClub: async (req, res) => {
    try {
      const club = await Club.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!club) return res.status(404).json({ message: 'Club not found' });
      res.status(200).json(club);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteClub: async (req, res) => {
    try {
      const club = await Club.findByIdAndDelete(req.params.id);
      if (!club) return res.status(404).json({ message: 'Club not found' });
      res.status(200).json({ message: 'Club deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = clubController;
