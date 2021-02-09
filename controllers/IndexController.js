const {Product, Sale} = require('../models');
const Sequelize = require('sequelize')


const IndexController = {
    index: async (req, res)=>{
        let products = await Product.findAll();

       return res.render('index', {products})
        
    }
}
module.exports = IndexController;