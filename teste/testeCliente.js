const { Cliente, sequelize } = require('../models');
Tarefa.findAll({include:"cliente"}).then(
    data=>{
        console.log(data.map(d => d.toJSON()));
        sequelize.close();
    }
)