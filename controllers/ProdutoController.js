const {Product} = require('../models');
const ProdutoController = {
    index: async (req, res)=>{
        let products = await Product.findAll();
        console.log(products)

       return res.render('produtos', {products})
        
    },
    create:(req, res)=>{
        return res.render('cadastroProduto')
    },
    store: async(req, res)=> {
        const {nome, preco, unidade_medida}= req.body;
        
        const resultado = await Product.create({
            nome,
            preco,
            unidade_medida
        });
        console.log(resultado)

        return res.redirect('/produtos')
    }

}
module.exports = ProdutoController;