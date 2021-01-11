
module.exports = (sequelize, DataTypes) =>{
    const Gerente  = sequelize.define('Gerente',{
        id_gerente:{
            type:DataTypes.INTEGER,
            primarykey:true,
            autoincrement:true
    },
        fk_usuario:{
            type:DataTypes.INTEGER
        }
        },{
        tableName:'gerente',
        timestamps:false 
    })
        Gerente.associate =(listaDeModelos)=>{
        Gerente.belongsTo(listaDeModelos.Usuario,{
        foreignkey: 'fk_usuario',
    }) 
        Gerente.hasMany(listaDeModelos.Empresa,{
        foreignkey: 'fk_gerente',
    }) 
}
    return Gerente;
}