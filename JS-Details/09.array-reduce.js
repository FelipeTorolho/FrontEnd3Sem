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

// Reduz o array a um único elemento . No caso um somátorio, por exemplo:

let totCamisetasEstoque = estoque.reduce((total, produto) => {
    return total + produto.quantidade;
}, 0);

console.log(`Total de camisetas em estoque: ${totCamisetasEstoque}`);