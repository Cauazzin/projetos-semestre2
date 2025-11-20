// 11) Quantidade de maiores de idade
console.log("\n11) Maiores de idade:");
let idades = [12, 19, 18, 30, 22, 14, 17, 45, 20, 16];
let maiores = 0;
for (let i = 0; i < idades.length; i++) {
  if (idades[i] >= 18) maiores++;
}
console.log("Quantidade:", maiores);