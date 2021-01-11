
module.exports = (sequelize, DataTypes) =>{
    const Empresa  = sequelize.define('Empresa',{
        id_empresa:{
            type:DataTypes.INTEGER,
            primarykey:true,
            autoincrement:true
        },
        nome_fantasia: DataTypes.STRING,
        razao_social: DataTypes.STRING,
        n_box:DataTypes.STRING,
        fk_gerente:{
            type:DataTypes.INTEGER
        },
        fk_seguimento:{
            type:DataTypes.INTEGER
        },
        fk_produto:{
            type:DataTypes.INTEGER
        }
            
    },{
        tableName:'empresa',
        timestamps:false 
    })
        Empresa.associate =(listaDeModelos)=>{
        Empresa.belongsTo(listaDeModelos.Gerente,{
        foreignkey: 'fk_gerente',
    })
} 
        Empresa.associate =(listaDeModelos)=>{
        Empresa.belongsTo(listaDeModelos.Seguimento,{
        foreignkey: 'fk_seguimento',
    })
}
        Empresa.associate =(listaDeModelos)=>{
        Empresa.hasMany(listaDeModelos.Produto,{
        foreignkey: 'fk_produto',
    }) 
}
    return Empresa;
}