
module.exports = (sequelize, DataTypes) =>{
    const Product  = sequelize.define('Product',{
        nome:DataTypes.STRING,
        preco:DataTypes.DECIMAL,
        unidade_medida:DataTypes.STRING,
    },{
        tableName:'product',
        timestamps:false 
    })
    Product.associate = (models) => {
        Product.hasMany(models.Sale, {
            foreignKey: {
                name: 'product_id'
              }
        })
    }
         
    return Product;
}

