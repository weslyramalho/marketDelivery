
module.exports = (sequelize, DataType) =>{
    const Usuario  = sequelize.define('Pessoa',{
        id_pessoa:{
            type:DataType.INTERGER,
            primarykey:true,
            autoIncrement:true
        },
        nome: DataType.STRING,
        sobrenome: DataType.STRING,
        email:{
            type:DataType.STRING,
            allowNull:true
        },
        senha:DataType.STRING,
        cpf:DataType.STRING,
        endereco: DataType.STRING,
        telefone: DataType.STRING,
    },{
        tableName:'pessoa',
        timestamps:false 
    })
    return Usuario;
}