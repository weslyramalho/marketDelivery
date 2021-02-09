module.exports = (req, res, next) =>{

    let authorization = req.header("authorization");
    
    if(!authorization){
        res.status(400).json({error: "Requisição invalida"});
        return;

    }
    //Interpretando o campo autorization do header
    let dados = authorization.split(" ");
    if(dados[0] != "bearer" || dados[1] == undefined){
        res.status(400).json({error: "Requisição invalida"});
        return;
    }
    //Atribuindo o token no objeto da reuisição
    req.token = dados[1];

    next();

    


}





