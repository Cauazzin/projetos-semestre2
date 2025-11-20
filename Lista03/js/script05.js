// ===================== 5. Tabuada =====================
let numTab = Number(prompt("5) Digite um número para tabuada:"));
let t = 1;
console.log("5) Tabuada de", numTab);

while (t <= 10) {
    console.log(numTab, "x", t, "=", numTab * t);
    t++;
}