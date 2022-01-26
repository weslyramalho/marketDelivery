const {Usuario} = require('../models')
const UserController = {
    // Busca todos os usuarios cadastrados no banco//
    index: async(req, res) =>{
        let users = await Usuario.findAll();
    
        
        return res.render('usuarios', {users})

    },

    create: (req, res)=> {
        return res.render('cadastroUsuario')
    },
    //cadastrar usuario 
    store: async (req, res)=>{
        const {nome, sobrenome, email, senha, cpf, endereco, telefone} = req.body;

        await Usuario.create({
            nome,
            sobrenome,
            email,
            senha,
            cpf,
            endereco,
            telefone

        })

    },
    //Para fazer uma busca de usuario por ID//
    findById: async(req, res)=>{
        let {id} = req.params;

        let user = Usuario.findOne({
            where:{
                id:id
            }
        })
        return res.render('viewUsuario', {user})
    },
    //fazer pesquisa de usuario via formulario//
    search: async(req,res)=>{
        let {key} = req.query
        let users = await Usuario.findAll({
            where:{
                nome:{
                    [Op.like]:'%${key}%'
                }

            },
            //ordenar lista de pesquisa
            order: [
                ['nome', 'DESC'] //ordena em ordem decrecente por nome 
             // ['id', 'DESC'] ordem decrecente por id
             // ['nome', 'ASC'] ordena em ordem crescente por nome
             // ['id', 'ASC'] ordena em ordem crescente porID
            ]
        });
        return res.render('usuarios', {users})
    },
    //contar itens
    agregadoras: async (req, res)=> {
        let total = await Usuario.count();
        //let total = await Usuario.min('id'); para saber o menor iten
        //let total = await Usuario.max('id'); para saber o maior iten
        //let total = await Usuario.sum('id'); para somar todos os itens



        res.send('O total de itens na tela é' + total)
    }
}
module.exports =UserController