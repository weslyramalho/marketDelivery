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
        },
        showProducts: async(req, res)=>{
            const {id} = req.params;

            const categoria =await Categoria.findOne({
                where: {
                    id_categoria:id
                },
                include:{
                    model:Produto,
                    required:true
                }
            })
        }


    });
    return res.render('produtos', {produtos})
}


    }

module.exports = ProdutoController