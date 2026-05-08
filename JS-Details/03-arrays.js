let frutasVermelhas = new Array();
let frutasCitricas = ["Laranja", "Limão", "Abacaxi", "Tangerina"];

frutasVermelhas.push("Morango");
frutasVermelhas.push("Cereja");
frutasVermelhas.push("Framboesa");

console.log(frutasVermelhas);
const frutaRemovida = frutasVermelhas.pop();// retira o último elemento do array
console.log(frutasVermelhas);

console.log(`${frutaRemovida} foi removida do cesto de frutas`);