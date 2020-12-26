
const Produto = require("./Produto");

module.exports = (sequelize, DataType) =>{
    const Categoria  = sequelize.define('Categoria',{
        id:{
            type:DataType.INTERGER,
            primarykey:true,
            autoIncrement:true
        },
        nome:DataType.STRING,
        
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


    
    return categoria;
}