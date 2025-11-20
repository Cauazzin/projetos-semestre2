// ===================== 8. Fibonacci até N =====================
let limite = Number(prompt("8) Digite um número para Fibonacci:"));
let f1 = 0, f2 = 1;
let fibText = "";

while (f1 <= limite) {
    fibText += f1 + " ";
    let temp = f1 + f2;
    f1 = f2;
    f2 = temp;
}
console.log(" Fibonacci até", limite + ":", fibText);
