const {User} = require('../models')
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
        
        const resultado = await User.create({
            nome,
            telefone,
            email,
            senha,
            endereco,
            cpf
        });
        console.log(resultado)

        return res.redirect('/users')
    }

}
module.exports = UserController;