const {User} = require('../models')
const UserController = {
    logar: async (req, res)=>{
        let users = await User.findAll();
        console.log(users)

        res.render('login')
        
    }
}
module.exports =UserController;