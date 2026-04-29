function calcular() {
    //pegar os valores dos campos
    const nome = document.getElementById("nome").value;
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    // Deixou de preencher um campo
    if (nome.trim().length == 0 || isNaN(altura) || isNaN(peso)) {
        alert("Preencha todos os campos");
        return false;
    }

    const IMC = calcularImc(altura, peso);
    const textoImc = gerarTextoImc(IMC);

    console.log(nome);
    console.log(altura);
    console.log(peso);
    console.log(IMC);
    console.log(textoImc);

    const objIMC = {
        nome: nome,
        altura: altura,
        peso: peso,
        imc: IMC,
        textoImc: textoImc
    };

    const retorno = cadastrarNaAPI(objIMC); //retorna true ou false
    if (retorno) {
       buscarIMCs(); 

        document.getElementById("cadastro").innerHTML += linhaTabela;

        //limpar os campos do formulario
        document.getElementById("nome").value = "";
        document.getElementById("altura").value = "";
        document.getElementById("peso").value = "";

        alert(`${nome} foi cadastrado no banco:
            Nome: ${nome}
            IMC: ${IMC}
            Situação: ${textoImc}`);
    } else {
        alert("Não foi possível cadastrar");
    }


}

async function cadastrarNaAPI(objIMC) {
    // chamar o fecth e fazer um post
    try {
        const resposta = await fetch("http://localhost:3000/imc", {
            method: "POST",
            body: JSON.stringify(objIMC),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });

        return true;
    } catch (error) {

        console.log(error);
        return false;
    }
}


// recebe altura e peso e retorna o imc calculado
function calcularImc(altura, peso) {
    return peso / (altura * altura);
}


function gerarTextoImc(IMC) {
    if (IMC < 16) {
        return "Magreza grave";
    } else if (IMC < 17) {
        return "Magreza moderada";
    } else if (IMC < 18.5) {
        return "Magreza leve";
    } else if (IMC >= 18.5 && IMC < 25) {
        return "Peso normal";
    } else if (IMC >= 25 && IMC < 30) {
        return "Sobrepeso";
    } else if (IMC >= 30 && IMC < 35) {
        return "Obesidade grau 1";
    } else if (IMC >= 35 && IMC < 40) {
        return "Obesidade grau 2";
    } else {
        return "Obesidade grau 3";
    }
}



/*

*fazer um get
*rodar um for com a lista que o get retornou
*inserir as linhas da tabela com os dados html
*/
async function buscarIMCs() {
    try {
        const retorno = await fetch("http://localhost:3000/imc");
        const dadosRetornados = await retorno.json();

        // Ordena por nome em ordem crescente
        dadosRetornados.sort((a, b) => {
            return a.nome.localeCompare(b.nome);
        });


        console.log(dadosRetornados); //dados do cadastro

        const tabela = document.getElementById("cadastro");
        let template = "";

        for (let i = 0; i < dadosRetornados.length; i++) {
            template +=
                `<tr>
            <td>${dadosRetornados[i].nome}</td>
            <td>${dadosRetornados[i].altura}</td>
            <td>${dadosRetornados[i].peso}</td>
            <td>${dadosRetornados[i].imc.toFixed(2)}</td>
            <td>${dadosRetornados[i].textoImc}</td>
        </tr>`;
        }

        tabela.innerHTML = template;

    } catch (error) {
        console.log(error);
    }
}