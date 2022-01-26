
module.exports = (sequelize, DataTypes) =>{
    const Pedido  = sequelize.define('Pedido',{
        id_pedido:{
            type:DataTypes.INTEGER,
            primarykey:true,
            autoincrement:true
    },
        fk_produto:{type:DataTypes.INTEGER},
        Fk_cliente:{type:DataTypes.INTEGER},
},{
        tableName:'pedido',
        timestamps:false 
    })
        Pedido.associate =(listaDeModelos)=>{
        Pedido.belongsTo(listaDeModelos.Cliente,{
        foreignkey: 'fk_cliente',
    }) 
        Pedido.belongsTo(listaDeModelos.Produto,{
        foreignkey: 'fk_produto',
    }) 
        Pedido.hasMany(listaDeModelos.Entrega,{
        foreignkey: 'fk_pedido',
    })
}
    return Pedido;
}