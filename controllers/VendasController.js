const {Sale} = require('../models');

const VendasController = {
    index: async (req, res) => {
        let sales = await Sale.findAll();
        console.log(sales);

        return res.render('vendas', {sales});
    },
    selectProduto: async (req, res) => {
        
    }
}
module.exports = VendasController;