const {Client, User} = require('../models')
const ClientController = {
    index: async (req, res)=>{
        let clients = await Client.findAll();
        console.log(clients)

       return res.render('client', {clients})
        
    },
    showClient: async (req, res)=>{
        const {id} = re.params

        const client = await Client.findOne({
            where: {
                id: id
            },
            include: {
                model:User,
                required:true
            }
        })
        return res.render('produtosVendas', {client})
    },

}
module.exports = ClientController;