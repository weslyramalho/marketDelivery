const {User} = require('../models')
const {check, validationResult, body} = require('express-validator')
const fs = require('fs')
const bcrypt = require('bcrypt')

const UserController = {
    index: async (req, res)=>{
        let users = await User.findAll();
        console.log(users)

       return res.render('user', {users})
        
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
        console.log(resultado) 
        return res.redirect('/login')
    },
    logarUsuario: async (req, res)=> {
        let {email, senha} = req.body;
        let user = await User.findAll()

        if(email != user.email) {
            return res.send("usuario ou senha invalida")
        }
        if (!bcrypt.compareSync(senha, user.senha)){
            return res.send("usuario ou senha invalida")
        }

        res.redirect("/home")

    }

}
    module.exports = UserController;