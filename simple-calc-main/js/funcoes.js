function calcular() {
    event.preventDefault();
    //entrada
    let n1 = parseFloat( document.getElementById('n1').value ) ;
    let n2 = parseFloat( document.getElementById("n2").value );
    let op = document.getElementById("operacao").value;//soma
    let resultado = null;
    
    if( isNaN(n1) || isNaN(n2) ){
        document.getElementById('resultado').innerText = 'Preencha todos os números!'

    }

    //processamento
    if(op == 'soma'){
        resultado = somar(n1, n2)
        resultado = resultado.toFixed(2);

    } else if(op == 'subtracao') {
        resultado = subtrair(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'multiplicacao'){
        resultado = multiplicar(n1, n2);
        resultado = resultado.toFixed(2);

    } else if (op == 'divisao'){

        if(n2 == 0) {
            resultado = 'Não é um número';
        } else {
            resultado = dividir(n1, n2);
            resultado = resultado.toFixed(2);
        }
            
    } else {
        resultado = "Operação Inválida";
    }

    //saída
    // console.log(`Resultado da operação: ${resultado}`);

     console.log(n1);
    console.log(n2);
    console.log(op);
    console.log(resultado);
    



    //objeto dos dados
    const objCal = {
        n1: n1,
        n2: n2,
        operacao: op,
        resultado: resultado
    }

    //cadastrar na api
    const retorno = cadastrarNaApi(objCal);
    
    
    //exibir os dados
    exibirDados(n1, n2, op, resultado);

}



async function cadastrarNaApi(objCal) {
    // chamar o fecth e fazer um post
    try {
        const resposta = await fetch("http://localhost:3000/calculadora", {
            method: 'POST',
            body: JSON.stringify(objCal),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
       
    } catch (error) {
        console.log(error);
    }
}


/**
 * Função somar recebe 2 valores e retorna a soma dos 
 * dois valores
 */
 function somar(valor1, valor2) {
    return valor1 + valor2;
}


function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

function dividir(valor1, valor2) {
    if(valor2 == 0) {
        return 'Não é um número';
    }
    
    return valor1 / valor2;
}

function exibirDados(n1, n2, op, resultado) {
    const calculo = document.getElementById('cadastro');
    let template = `
        <article class="data__card-result">
            <span><strong>Primeiro Número:</strong> ${n1}</span>
            <span><strong>Segundo Número:</strong> ${n2}</span>
            <span><strong>Operação:</strong> ${op}</span>
            <span><strong>Resultado:</strong> ${resultado}</span>
        </article>
    `

    calculo.innerHTML += template;
}


async function buscarSimple() {

    try {

        const resposta = await fetch("http://localhost:3000/calculadora");
        const dados = await resposta.json();

        console.log(dados);

        const calculo = document.getElementById('cadastro');
        let template = '';

        for (let i = 0; i < dados.length; i++) {
            template += `
                <article class="data__card-result">
                    <span><strong>Primeiro Número:</strong> ${dados[i].n1}</span>
                    <span><strong>Segundo Número:</strong> ${dados[i].n2}</span>
                    <span><strong>Operação:</strong> ${dados[i].operacao}</span>
                    <span><strong>Resultado:</strong> ${dados[i].resultado}</span>
                </article>
            `;
        }

        calculo.innerHTML = template;

    } catch (error) {
        console.log(error);
    }
}