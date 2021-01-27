var express = require('express');
var router = express.Router();
const UserController = require('../controllers/UserController');
const logDBMiddleware = require('../middlewares/logDb')
const {check, validationResult, body} = require('express-validator')


/* usuarios. */
router.get('/', UserController.index);
//router.get('/:id', UserController.findById)
//router.get('/search', UserController.search)
router.get('/cadastro', logDBMiddleware, UserController.create)
router.post('/cadastro', logDBMiddleware, UserController.store)
router.get('/login', logDBMiddleware, UserController.logarUsuario)

//router.post('/cadastro', logDBMiddleware, [
  //  check("nome").isLength({min:3}).withMessage("O nome do usuario tem que ter no minimo 3 caracteres!"),
//check("email").isEmail().withMessage("Digite um email valido!"),
//    check("senha").isLength({min:6}).withMessage("A senha deve ter no minimo 6 caracteres"),
 //   body("email").custom((email)=>{
        
 //   })
//], UserController.store)

module.exports = router;
