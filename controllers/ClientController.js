const {Client} = require('../models')
const ClientController = {
    index: async (req, res)=>{
        let clients = await Client.findAll();
        console.log(clients)

       return res.render('client', {clients})
        
    }

}
module.exports = ClientController;