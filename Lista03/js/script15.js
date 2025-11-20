// ===================== 15. Média até nome 'fim' =====================
let somaI = 0;
let total = 0;

while (true) {
    let nomeP = prompt("15) Digite um nome ('fim' para parar):");

    if (nomeP.toLowerCase() === "fim") break;

    let idadeP = Number(prompt("Idade:"));
    somaI += idadeP;
    total++;
}

console.log("15) Média das idades =", somaI / total);