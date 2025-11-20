// ===================== 9. Média idade 5 pessoas =====================
let c = 1;
let somaIdade = 0;

while (c <= 5) {
    let nome = prompt(" Nome da pessoa " + c + ":");
    let idade = Number(prompt("Idade:"));
    somaIdade += idade;
    c++;
}
console.log(" Média das idades =", somaIdade / 5);

