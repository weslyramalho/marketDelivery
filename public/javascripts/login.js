const { response } = require("express");
const { render } = require("express/lib/application");
const { json } = require("sequelize/types");

const tfemail = document.getElementById('email');
const tfsenha = document.getElementById('senha');
const btlogar = document.getElementById('btLogar');

const onBtLogarClick = () => {
    if (tfemail.value == '' ||tfsenha == ''){
        alert("Preenchaos campos login e senha");
    }
    login(tfemail.value, tfsenha.value);
};

btlogar.addEventListener('click', onBtLogarClick);

const login = async(email,senha) => {
    let login = await fetch('/login',{
        method: 'POST',
        body: JSON.stringify({email: email, senha: senha}),
        headers: {'content-Type': 'apllication/json'}
    });
    //interpretar essaa resposta como json
    let dados = await response.json();
    // verificarfalha de login
    if(dados.error){
        exibirErrorDeLogin();
        return;
    }
    //Guardar o token no sessionStorage
    sessionStorage.setItem("token", dados.token);

    //Guardar o user no sessionstorage
    sessionStorage.getItem("user", JSON.stringify(dados.user));

    //Esconder o form de login e mostrar a lista de tarefas
    toggleLogin();

    // carregar as tarefas do servirdor
    carregarTarefas();


}

const toggleLogin = ()=>{
    document.getElementById().style.display = "none";
    document.querySelector("main").style.display = "block";
}
const exibirErrorDeLogin = () => {
    console.log("Falha no login")
}
const carregarTarefas = async()=>{
    //capturando responseda req contra get "/tarefas"
    let response = await fetch('/tarefas', {
        method: "GET",
        headers: {
            authorization: 'bearer ${sessionStorage.getItem('token')}'
        }
    });
    //guardando as tarefas carrgadas no array
    //global tarefas
    tarefas = await response.json();

    //Exibindo as tarefas
    render(tarefas);
}

