
module.exports = (sequelize, DataTypes) =>{
    const Entregador  = sequelize.define('Entregador',{
        id_entregador:{
            type:DataTypes.INTEGER,
            primarykey:true,
            autoincrement:true
        },
        cnh: DataTypes.STRING,
        placa_do_transporte: DataTypes.STRING,
        fk_usuario:{
            type:DataTypes.INTEGER
        }
  
    },{
        tableName:'entregador',
        timestamps:false 
    })
        Entregador.associate =(listaDeModelos)=>{
        Entregador.belongsTo(listaDeModelos.Usuario,{
        foreignkey: 'fk_usuario',
    }) 
        Entregador.hasMany(listaDeModelos.Entrega,{
        foreignkey: 'fk_entregador',
    }) 
}
    return Entregador;
}