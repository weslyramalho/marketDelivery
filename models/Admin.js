
module.exports = (sequelize, DataTypes) =>{
    const Admin  = sequelize.define('Admin',{
       
        fk_user:{
            type:DataTypes.INTEGER,

        }
    },{
        tableName:'admin',
        timestamps:false 
    })
        Admin.associate =(listaDeModelos)=>{
        Admin.belongsTo(listaDeModelos.User,{
        foreignkey: 'fk_user',
        })
    }
  
    return Admin;
}