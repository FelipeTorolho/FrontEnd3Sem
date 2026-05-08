let frutasVermelhas = new Array();
let frutasCitricas = ["Laranja", "Limão", "Abacaxi", "Tangerina", "Acerola"];

// shift() - retira o primeiro elemento e reorganiza os indeces

console.log(frutasCitricas);
console.log(frutasCitricas[0]);
console.log(frutasCitricas[1]);
console.log(frutasCitricas[2]);
console.log(frutasCitricas[3]);
console.log(frutasCitricas[4]);

//remove a laranja
let frutaRemovida = frutasCitricas.shift();
console.log(frutasCitricas);
console.log(`Removemos a fruta: ${frutaRemovida}`);

console.log(frutasCitricas);
console.log(frutasCitricas[0]);
console.log(frutasCitricas[1]);
console.log(frutasCitricas[2]);
console.log(frutasCitricas[3]);
console.log(frutasCitricas[4]);