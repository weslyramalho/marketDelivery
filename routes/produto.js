var express = require('express');
var router = express.Router();
const ProdutoController = require('../controllers/ProdutoController')

/* listar produtos */
router.get('/', ProdutoController.index);
router.get('/cadastro', ProdutoController.create)
router.post('/cadastro', ProdutoController.store)

module.exports = router;
