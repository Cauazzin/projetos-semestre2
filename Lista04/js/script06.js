// 6) Maior e menor entre 10 números

console.log("\n6) Maior e menor valor:");
let numeros = [4, 9, 1, 15, 22, 3, 7, 5, 11, 2];
let maior = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) maior = numeros[i];
  if (numeros[i] < menor) menor = numeros[i];
}
console.log("Maior:", maior);
console.log("Menor:", menor);

