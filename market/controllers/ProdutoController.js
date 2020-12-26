const Sequelize = require('sequelize')
const config = require('../config/database')
const {Produto, Categoria} = require('../models')
const ProdutoController = {
//index: async (req, res) => {
// const db = new Sequelize(config)
//const result = await db.query('select * from produto', {type:Sequelize.QueryTypes.SELECT})
//console.log(result)
index: async (req, res) => {
    const produtos = await Produto.findAll({
        include:{
            as:categoria,
            model:'Categoria',
            required:true
        }
    });
    return res.render('produtos', {produtos})
}


    }

module.exports = ProdutoController