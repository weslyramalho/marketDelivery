const config = require('../config/database');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>{

    try{
    let corpo = jwt.verify(req.token, config.tokenSecret);
    req.user = corpo.user;

    next();
    }catch(error){
        res.status(400).json({error: "token inválido"});
        return;
    }

    
}