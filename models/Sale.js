
module.exports = (sequelize, DataTypes) =>{
    const Sale  = sequelize.define('Sale',{
        
        valor_total:DataTypes.DECIMAL,
        entrega:DataTypes.STRING,
        
    
},{
        tableName:'sale',
        timestamps:false 
    })


    return Sale;
}