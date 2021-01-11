
module.exports = (sequelize, DataTypes) =>{
    const Produto  = sequelize.define('Produto',{
        id_produto:{
            type:DataTypes.INTEGER,
            primarykey:true,
            autoincrement:true
        },
        nome:DataTypes.STRING,
        preco:DataTypes.DECIMAL,
        unidade_medida:DataTypes.STRING,
        fk_categoria:{           ///pega id da chave estrangueira categoria
            type:DataTypes.INTEGER,
        }
    },{
        tableName:'produto',
        timestamps:false 
    })
        //falar que produto pertence a uma categoria
            Produto.associate =(listaDeModelos)=>{
            Produto.belongsTo(listaDeModelos.Categoria,{
            foreignkey: 'fk_categoria',
                as: 'caetgoria'
            })
            Produto.hasMany(listaDeModelos.Empresa,{
                foreignkey: 'fk_produto',
            })
            Produto.hasMany(listaDeModelos.Pedido,{
                foreignkey: 'fk_produto',
            })
    
        }
    return Produto;
}