const {User} = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

const AuthController= {
    login: async (req,res) =>{

        //capturar as informações da requisição
        const {email, senha}= req.body;

        // carregar o usuario que seja dono do email 
        const user = await User.findOne({where: {email}});

        //tratando o caso de usuario inexistente
        if(!user){
            return res.status(401).json({error: "Usuario/Senha inválida"});
        }


        // validar o usuario
        const loginOk = await bcrypt.compare(senha, user.senha);

        //Tratando o caso da validação da senha 
        if(!loginOk){
            return res.status(401).json({error: "Usuario/Senha invalida"});
        }
        //arrancando a senha do objuser
        user.senha = undefined;
        //gerar token (jwt)
        const token = jwt.sign({user}, config.tokenSecret);
        // enviar token
        //return res.json({user,token});
       
       return res.redirect('/produtos')

       //return res.json(req.body);
    }
}
module.exports = AuthController