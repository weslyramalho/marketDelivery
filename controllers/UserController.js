const {User} = require('../models')
const {check, validationResult, body} = require('express-validator')
const fs = require('fs')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/database')

const UserController = {
    index: async (req, res)=>{
        let users = await User.findAll();
        console.log(users)

       return res.render('client', {users})
        
    },
    create:(req, res)=>{
        return res.render('cadastroUsuario')
    },
    store: async(req, res)=> {

        const {nome, telefone, email, senha, endereco, cpf}= req.body;
         let senhaC = bcrypt.hashSync(senha, 8)
         
        
        const resultado = await User.create({
            nome,
            telefone,
            email,
            senha:senhaC,
            endereco,
            cpf
        });
        res.alert
        return res.redirect('/')
    },
    logarUsuario: async (req, res)=> {
        const {email, senha} = req.body;
        const user = User.findOne({where: {email}})

    

        if(!user) {
            return res.status(401).json({error:"usuario/senha invalida"})
        }
        const loginOk = await bcrypt.compare(senha, user.senha)

        if(!loginOk) {
            return res.status(401).json({error: "usuario/senha invalida"})
        }
        user.senha = undefined

        //gerar token(jwt)
        const token = jwt.sign({user}, config.tokenSecret)
        //enviar token
        return res.json({user, token})

    }

}
    module.exports = UserController;