// ===================== 11. Soma pares até N =====================
let nPares = Number(prompt(" Digite um número:"));
let sP = 0;
let y = 1;

while (y <= nPares) {
    if (y % 2 === 0) sP += y;
    y++;
}
console.log(" Soma dos pares =", sP);