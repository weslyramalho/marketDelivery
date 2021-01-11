
const Produto = require("./Produto");

module.exports = (sequelize, DataTypes) =>{
    const Categoria  = sequelize.define('Categoria',{
        id_categoria:{
            type: DataTypes.INTEGER,
            primarykey: true,
            autoincrement: true
        },
        nome: DataTypes.STRING,
        
    },{
        tableName:'categoria',
        timestamps:false 
    })
        Categoria.associate = (listaDeModelos) => {
        Categoria.hasMany(listaDeModelos.Produto, {
            foreignkey: 'fk_categoria',
            as:'produtos'
        })
    }


    
    return Categoria;
}