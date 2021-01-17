
module.exports = (sequelize, DataTypes) =>{
    const Client = sequelize.define('Client',{
        
        }, {
        tableName:'client',
        timestamps:false 
    })
    Client.associate = (models) => {
        Client.hasMany(models.Sale, {
            foreignKey: {
                name: 'client_id'
              }
        })
    }

    return Client;
}