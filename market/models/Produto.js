
module.exports = (sequelize, DataType) =>{
    const Produto  = sequelize.define('Produto',{
        id:{
            type:DataType.INTERGER,
            primarykey:true,
            autoIncrement:true
        },
        nome:DataType.STRING,
        descricao:DataType.STRING,
        imagem:DataType.STRING,
        preco:DataType.DECIMAL,
        unidade_medida:DataType.STRING,
        fk_categoria:{           ///pega id da chave estrangueira categoria
            type:DataType.INTERGER,
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
    
        }
    return Produto;
}