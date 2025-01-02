// filepath: /C:/Users/kecha/Documents/MERN-STACK-PROJECT/express/routes/reservation.js
const express = require('express');
const reservationController = require('../controllers/reservationController');
const router = express.Router();

router.get('/', reservationController.getAllReservations);
router.post('/', reservationController.createReservation);
router.delete('/:id', reservationController.deleteReservation);

module.exports = router;