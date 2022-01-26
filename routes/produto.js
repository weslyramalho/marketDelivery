var express = require('express');
var router = express.Router();
const ProdutoController = require('../controllers/ProdutoController')

/* listar produtos */
router.get('/', ProdutoController.index);

module.exports = router;
