const express = require('express');
const clubController = require('../controllers/clubController');




const router = express.Router();

router.get('/', clubController.getAllClubs);
router.post('/', clubController.createClub);
router.put('/:id', clubController.updateClub);
router.delete('/:id', clubController.deleteClub);

module.exports = router;
