
module.exports = (sequelize, DataTypes) =>{
    const Cliente = sequelize.define('Cliente',{
        id_cliente:{
            type: DataTypes.INTEGER,
            primarykey: true,
            autoincrement: true
    },
        fk_usuario:{
            type: DataTypes.INTEGER,
        }

        }, {
        tableName:'cliente',
        timestamps:false 
    })
        Cliente.associate =(listaDeModelos)=>{
        Cliente.belongsTo(listaDeModelos.Pedido,{
        foreignkey: 'fk_cliente',
    }) 
}
        Cliente.associate =(listaDeModelos)=>{
        Cliente.belongsTo(listaDeModelos.Usuario,{
        foreignkey: 'fk_usuario',
    }) 
}
     
    return Cliente;
}