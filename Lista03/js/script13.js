// ===================== 13. Dígitos separados =====================
let numDig = prompt("13) Digite um número:");
let idx = 0;
let digitos = "";

while (idx < numDig.length) {
    digitos += numDig[idx] + " ";
    idx++;
}
console.log("13) Dígitos:", digitos);
