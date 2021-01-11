
module.exports = (sequelize, DataTypes) =>{
    const Seguimento  = sequelize.define('Seguimento',{
        id_seguimento:{
            type:DataTypes.INTEGER,
            primarykey:true,
            autoincrement:true
        },
        nome: DataTypes.STRING,
    },{
        tableName:'seguimento',
        timestamps:false 
    })
        Seguimento.associate =(listaDeModelos)=>{
        Seguimento.belongsTo(listaDeModelos.Empresa,{
        foreignkey: 'fk_seguimento'
        
        })
    }
  
    return Seguimento;
}