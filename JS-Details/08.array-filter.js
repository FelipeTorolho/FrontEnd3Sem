// utilizando para filtrar um elemento dentro de um array, retorna apenas o encontrado

const numeros = [5, 10, 14];

const encontrado = numeros.filter((n) => {
    return n == 10;
});

//console.log(encontrado);


const estoque = [
    {
        descricao: "Camisa Polo",
        cor: "Vermelho",
        perfil: "M",
        quantidade: 10
    },
    {
        descricao: "Camisa Polo",
        cor: "Amarelo",
        perfil: "F",
        quantidade: 15
    },
    {
        descricao: "Camisa Polo",
        cor: "Azul",
        perfil: "M",
        quantidade: 30
    },
    {
        descricao: "Camisa Polo",
        cor: "Branca",
        perfil: "F",
        quantidade: 5
    },
];


const camisetasFemininas = estoque.filter((camiseta) => {
    return camiseta.perfil == "F";
});

console.log(camisetasFemininas);

console.log("Camisetas Polo Femininas em estoque: ");
console.log();// pula uma linha vazia
//utilizar o foreach e exibir os textos conforme o exemplo
    //"Amarela: 10 Unidades"

camisetasFemininas.forEach((item) => {
    console.log(`${item.cor}: ${item.quantidade} Unidade(s)`);
});