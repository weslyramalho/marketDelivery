
module.exports = (sequelize, DataTypes) =>{
    const Payment  = sequelize.define('Payment',{
        forma_pagamento:DataTypes.STRING
        },{
        tableName:'payment',
        timestamps:false 
    })
    Payment.associate = (models) => {
        Payment.hasOne(models.Sale, {
            foreignKey: {
                name: 'payment_id'
              }
        })
    }

    return Payment;
}