const fs = require('fs')

function logDb(req, res, next){
    fs.appendFileSync('logDb.txt', "Foi criado um registro pela url: " + req.url)
    next()

}

module.exports = logDb