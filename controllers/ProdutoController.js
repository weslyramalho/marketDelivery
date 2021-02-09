const config = require('../config/database')
const {Product, Sale, User} = require('../models');
const Sequelize = require('sequelize')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const Op = Sequelize.Op


const ProdutoController = {
    index: async (req, res)=>{
        
        let products = await Product.findAll();
        
        console.log(products)

       return res.render('produtos', {products})
        
    },
    showProducts: async (req, res)=>{
        const {id} = req.params

        const product = await Product.findOne({
            where: {
                id: id
            },
            include: {
                model:Sale,
                required:true
            }
        })
        return res.render('produtosVendas', {product})
    },
    create:(req, res)=>{
        return res.render('cadastroProduto')
    },
    findById: async (req, res)=>{
        let {id} = req.params;

        let product = await Product.findOne({
            where: {
                id:id
            }
        })
        return res.render('produtosvena', {product})

    },
    //perquisar via nome
    search: async (req, res)=>{
        let {key} = req.query
        let products = await Product.findAll({
            where:{
                nome: {
                    [Op.like]: '%${key}%'
                }
            },
            //ordenar
            order: [
                ['id', 'ASC']
            ]
        })
        return res.render('produtosv', {products} )

    },
    store: async(req, res)=> {
        const {nome, preco, unidade_medida, descricao}= req.body;
        let {files} = req
        const product = await Product.create({
            nome,
            preco,
            unidade_medida,
            imag:"/images/" + files[0].originalname,
            descricao,
        });
       

        return res.render('produtos', {product})
    },
    edit: async  (req, res)=> {
        const {id} = req.params

        const product = await Product.findByPk(id)

        return res.render('editarProduto', {product})

    },
    update: async (req, res)=> {
        const {id} = req.params

        const {nome, preco, unidade_medida, imag, descricao}= req.body;

        const resultado = await Product.update({
            nome,
            preco,
            unidade_medida,
            imag,
            descricao
        },
        {
            where:{
                id: id
            }
        })
        return res.redirect('produtos',{id})
    },
    destroy: async (req, res)=>{
        const {id} = req.params

        const resultado = await Product.destroy({
            where:{
                id: id
            }
        })
 res.redirect('produtos', {id})

    }


}
module.exports = ProdutoController;