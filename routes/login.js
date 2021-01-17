const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/LoginController');
/* usuarios. */
router.get('/', LoginController.logar);



module.exports = router;