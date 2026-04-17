async function cadastrarContato(objetoContato){
    console.log(objetoContato);

    // cadastrar na api
    let resposta = await fetch("http://localhost:3000/contacts", {
        method: "POST",
        body: JSON.stringify(objetoContato),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    });
}


function validarFormulario() {
    let nome = document.getElementById("nome").value;// pegando o valor do campo com o id nome
    let sobrenome = document.getElementById("sobrenome").value;// pegando o valor do campo com o id sobrenome
    // let email = document.getElementById("email").value;// pegando o valor do campo com o id email
    // let telefone = document.getElementById("pais").value;// pegando o valor do campo com o id telefone
    // let ddd = document.getElementById("ddd").value;// pegando o valor do campo com o id telefone
    // let numero = document.getElementById("telefone").value;// pegando o valor do campo com o id telefone
    // let cep = document.getElementById("cep").value;// pegando o valor do campo com o id cep
    // let rua = document.getElementById("rua").value;// pegando o valor do campo com o id rua
    // let numeroEndereco = document.getElementById("numero").value;// pegando o valor do campo com o id numeroEndereco
    // let apartamento = document.getElementById("apartamento").value;// pegando o valor do campo com o id apartamento
    // let bairro = document.getElementById("bairro").value;// pegando o valor do  campo com o id bairro
    // let cidade = document.getElementById("cidade").value;// pegando o valor do  campo com o id cidade
    // let estado = document.getElementById("estado").value;// pegando o valor do  campo com o id estado
    // let anotacoes = document.getElementById("anotacoes").value;// pegando o valor do  campo com o id anotacoes

    let quantidadeErros = 0;// variavel para contar a quantidade de erros


    if (nome == 0) {//se o nome estiver vazio
        formError("nome");
        quantidadeErros++;
    }
    else {
        reiniciaBorda("nome");
    }

    if (sobrenome == 0) {//se o sobrenome estiver vazio
        formError("sobrenome");
        quantidadeErros++;
    }
    else {
        reiniciaBorda("sobrenome");
    }

    // cadastrar lá na api
    //gerar um objeto com os dados
    let objetoContato = {
        nome: nome,
        sobrenome: sobrenome
    };

    let cadastrado = cadastrarContato(objetoContato);
    return false;

    // if (email == 0) {//se o email estiver vazio
    //     formError("email");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("email");
    // }

    // if (telefone == 0) {//se o telefone estiver vazio
    //     formError("pais");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("pais");
    // }

    // if (ddd == 0) {//se o ddd estiver vazio
    //     formError("ddd");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("ddd");
    // }

    // if (numero == 0) {//se o numero estiver vazio
    //     formError("telefone");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("telefone");
    // }

    // if (cep == 0) {//se o cep estiver vazio
    //     formError("cep");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("cep");
    // }

    // if (rua == 0) {//se o rua estiver vazio
    //     formError("rua");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("rua");
    // }

    // if (numeroEndereco == 0) {//se o numeroEndereco estiver vazio
    //     formError("numero");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("numero");
    // }

    // if (apartamento == 0) {//se o apartamento estiver vazio
    //     formError("apartamento");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("apartamento");
    // }

    // if (bairro == 0) {//se o bairro estiver vazio
    //     formError("bairro");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("bairro");
    // }

    // if (cidade == 0) {//se o cidade estiver vazio
    //     formError("cidade");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("cidade");
    // }

    // if (estado == 0) {//se o estado estiver vazio
    //     formError("estado");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("estado");
    // }

    // if (anotacoes == 0) {//se o anotacoes estiver vazio
    //     formError("anotacoes");
    //     quantidadeErros++;
    // }
    // else {
    //     reiniciaBorda("anotacoes");
    // }

    if (quantidadeErros != 0) {
        alert("Existem " + quantidadeErros + " campo(s) obrigatório(s) que não foram preenchido(s).");
        quantidadeErros = 0;
    }


}

// função que pinta a borda do campo que falta preencher
function formError(fildId) {
    document.getElementById(fildId).style.border = "1px solid red";
}

// função que pinta a borda do campo que falta preencher
function reiniciaBorda(fildId) {
    document.getElementById(fildId).style.border = "none";
}

async function buscarEndereco(cep) {
    if (cep.trim().length < 8) {
        alert("O CEP deve conter 8 dígitos.");
        return false;
    }

 try {

    aguardandoCampos();

    let retorno = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    let dados = await retorno.json();
    console.log(dados);

    document.getElementById("rua").value = dados.logradouro;
    document.getElementById("bairro").value = dados.bairro;
    document.getElementById("cidade").value = dados.localidade;
    document.getElementById("estado").value = dados.estado;
    
    }catch (error) {
    alert("Erro ao buscar o endereço:!");
    }
}

function aguardandoCampos() {
    document.getElementById("rua").value = "Aguardando...";
    document.getElementById("bairro").value = "Aguardando...";
    document.getElementById("cidade").value = "Aguardando...";
    document.getElementById("estado").value = "Aguardando...";
}

