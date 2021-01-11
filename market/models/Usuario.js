const Cliente = require("./Cliente")

module.exports = (sequelize, DataTypes) =>{
    const Usuario  = sequelize.define('Usuario',{
        id_usuario:{
            type:DataTypes.INTEGER,
            primarykey:true,
            autoincrement:true
        },
        nome: DataTypes.STRING,
        sobrenome: DataTypes.STRING,
        email:{
            type:DataTypes.STRING,
            allowNull:true
        },
        senha:DataTypes.STRING,
        cpf:DataTypes.STRING,
        endereco: DataTypes.STRING,
        telefone: DataTypes.STRING,
    },{
        tableName:'usuario',
        timestamps:false 
    })
        Usuario.associate = (listaDeModelos)=>{
        Usuario.belongsTo(listaDeModelos.Gerente,{
            foreignkey: 'fk_usuario'
        })
        Usuario.belongsTo(listaDeModelos.Cliente,{
            foreignkey: 'fk_usuario'
        })
        Usuario.belongsTo(listaDeModelos.Entregador,{
            foreignkey: 'fk_usuario'
        })
    }
    return Usuario;
}