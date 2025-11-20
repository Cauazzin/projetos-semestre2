// 13) Soma de múltiplos de 3 até um número
console.log("\n13) Soma de múltiplos de 3:");
let numLimite = 30; // coloque o número desejado
let somaMult3 = 0;
for (let i = 1; i <= numLimite; i++) {
  if (i % 3 === 0) somaMult3 += i;
}
console.log(somaMult3);
