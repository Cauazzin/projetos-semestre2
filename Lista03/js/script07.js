// ===================== 7. Primo =====================
let numPrimo = Number(prompt("7) Digite um número:"));
let k = 1;
let divisores = 0;

while (k <= numPrimo) {
    if (numPrimo % k === 0) divisores++;
    k++;
}

if (divisores === 2) console.log("É primo");
else console.log("Não é primo");
