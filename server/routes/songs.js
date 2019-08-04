const express = require('express');
const router = express.Router();
const songsController = require('../controllers/songsController');

router
  .route('/')
    .get(songsController.findAll);

router
  .route('/seed_data')
    .get(songsController.seedData);

module.exports = router;
