// filepath: /C:/Users/kecha/Documents/MERN-STACK-PROJECT/express/controllers/reservationController.js
const Reservation = require('../models/Reservation');
const Book = require('../models/Book');

const reservationController = {
  getAllReservations: async (req, res) => {
    try {
      const reservations = await Reservation.find();
      res.status(200).json(reservations);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  createReservation: async (req, res) => {
    const { user, book, returnDate } = req.body;

    try {
      const bookToReserve = await Book.findById(book);
      if (!bookToReserve) return res.status(404).json({ message: 'Book not found' });

      if (bookToReserve.copiesAvailable <= 0) {
        return res.status(400).json({ message: 'No copies available' });
      }

      const reservation = new Reservation({
        user,
        book,
        returnDate,
      });

      await reservation.save();

      bookToReserve.copiesAvailable -= 1;
      await bookToReserve.save();

      res.status(201).json(reservation);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteReservation: async (req, res) => {
    try {
      const reservation = await Reservation.findByIdAndDelete(req.params.id);
      if (!reservation) return res.status(404).json({ message: 'Reservation not found' });

      const book = await Book.findById(reservation.book);
      book.copiesAvailable += 1;
      await book.save();

      res.status(200).json({ message: 'Reservation deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = reservationController;