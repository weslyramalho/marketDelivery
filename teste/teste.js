const sequelize = require('sequelize');
const { Sequelize } = require('../models');

const connection = new Sequelize('peixaria', 'root', '@João15Guilherme09');

const conexao = connection.authenticate()
.then(function(){
    console.log("conexão com MSQL foi estabelecida com sucesso");
    
})
.catch(function (err){
    console.log("Não foi possivel se conectar como banco de dados MSQL");
})

.done();