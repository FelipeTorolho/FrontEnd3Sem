const hobbies = [
    "Assistir filmes", 
    "Jogar videogame", 
    "Conversar com amigos",
    "Fazer exercícios",
    "jogar futebol"
];

// Array map é um método de classe array que itera sobre o array retornado um novo array, compondo um novo resultado para cada índice antigo, veja:

const novosHobbies = hobbies.map((hobby) => {
    return `<p> ${hobby}</p>`
});

console.log(novosHobbies);