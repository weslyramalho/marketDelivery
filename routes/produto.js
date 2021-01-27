var express = require('express');
var router = express.Router();
const multer = require('multer')
const path = require('path')
const ProdutoController = require('../controllers/ProdutoController')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join('uploads'))
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}.${path.extname(file.originalname)}`)
    }
  })
   
  var upload = multer({ storage: storage })

/* listar produtos */
router.get('/', upload.any(), ProdutoController.index);
router.get('/ver/:id', ProdutoController.findById)
router.get('/search', ProdutoController.search)

router.get('/cadastro', ProdutoController.create)
router.post('/cadastro', upload.any(), ProdutoController.store)

router.get('/editar/:id', ProdutoController.edit)
//router.pos('/editar/:id', ProdutoController.update)

router.delete('/deletar/:id', ProdutoController.destroy)





module.exports = router;
