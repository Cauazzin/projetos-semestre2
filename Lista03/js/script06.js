// ===================== 6. Divisores =====================
let numDiv = Number(prompt("6) Digite um número positivo:"));
let d = 1;
let divs = "";

while (d <= numDiv) {
    if (numDiv % d === 0) divs += d + " ";
    d++;
}
console.log("6) Divisores de", numDiv + ":", divs)