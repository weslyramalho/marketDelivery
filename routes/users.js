var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');
/* usuarios. */
router.get('/', UserController.index);
//router.get('/:id', UserController.findById)
//router.get('/search', UserController.search)
router.get('/cadastro', UserController.create)

router.post('/cadastro', UserController.store)

module.exports = router;
