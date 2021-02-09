const {Sale, Product, Payment, Client} = require('../models');
const Sequelize = require('sequelize')

const VendasController = {
    index: async (req, res) => {
        let sales = await Sale.findAll();
        console.log(sales);

        return res.render('vendas', {sales});
    },
    selectProduto: async (req, res) => {
        
    },
    create:(req, res)=>{
        return res.render('vendas')
    },

    venda: async(req, res)=> {

        const {valor_total, entrega, product_id, payment_id, client_id}= req.body;
        
        const sales = await Sale.create({
            valor_total,
            entrega,
            product_id,
            payment_id,
            client_id
        });
        console.log(resultado) 
        return res.render('produtos', {product})
    },
}
module.exports = VendasController;