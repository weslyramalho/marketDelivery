const config = require('../config/database')
const {Payment, Sale} = require('../models');
const Sequelize = require('sequelize')


const PaymentController ={
showPayment: async (req, res)=>{
    const {id} = req.params

    const product = await Payment.findOne({
        where: {
            id: id
        },
        include: {
            model:Sale,
            required:true
        }
    })
    return res.render('produtosVendas', {product})
}
}
module.exports = PaymentController;