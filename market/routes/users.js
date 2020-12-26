var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');
/* usuarios. */
router.get('/', UserController.index);
router.get('/ver/:id', UserController.findById)
router.get('/search', UserController.search)

module.exports = router;
