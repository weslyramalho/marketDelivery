const { username } = require("../config/database");


module.exports = (sequelize, DataTypes) =>{
    const User  = sequelize.define('User',{
       
        nome: DataTypes.STRING,
        telefone: DataTypes.STRING,        
        email:{
            type:DataTypes.STRING,
            allowNull:true
        },
        
        senha:DataTypes.STRING,
        endereco: DataTypes.STRING,
        cpf:DataTypes.STRING,
      
       
    },{
        tableName:'user',
        timestamps:false 
    })

        User.associate = (models) => {
            User.hasMany(models.Client,{
                foreignKey: {
                    name: 'user_id'
             }
             })
        }

        
    
    return User;
}