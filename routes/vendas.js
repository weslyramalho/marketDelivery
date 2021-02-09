const express = require('express');
const router = express.Router();

const VendasController = require('../controllers/VendasController');

router.get('/cadastro', VendasController.create);
router.post('/cadastro', VendasController.venda);


module.exports = router;