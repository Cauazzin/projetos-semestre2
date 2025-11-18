// Exercicio 02 - Lista 02

let nome1 = prompt("2) Nome da primeira pessoa:");
let idade1 = Number(prompt("Idade da primeira pessoa:"));
let nome2 = prompt("Nome da segunda pessoa:");
let idade2 = Number(prompt("Idade da segunda pessoa:"));

if (idade1 > idade2) alert(nome1 + " é mais velho(a).");
else if (idade2 > idade1) alert(nome2 + " é mais velho(a).");
else alert("As duas pessoas têm a mesma idade.");

