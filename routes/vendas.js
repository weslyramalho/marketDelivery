const express = require('express');
const router = express.Router();

const VendasController = require('../controllers/VendasController');

router.get('/', VendasController.index);


module.exports = router;