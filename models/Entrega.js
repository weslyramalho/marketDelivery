
module.exports = (sequelize, DataTypes) =>{
    const Entrega  = sequelize.define('Entrega',{
        id_entrega:{
            type:DataTypes.INTEGER,
            primarykey:true,
            autoincrement:true
        },
        fk_entregador:{type:DataTypes.INTEGER},
        fk_pedido:{type:DataTypes.INTEGER},
    
    },{
        tableName:'entrega',
        timestamps:false 
    })
        Entrega.associate =(listaDeModelos)=>{
        Entrega.belongsTo(listaDeModelos.Pedido,{
        foreignkey: 'fk_pedido',
    }) 
        Entrega.belongsTo(listaDeModelos.Entregador,{
        foreignkey: 'fk_entregador'
    })
}
    return Entrega;
}