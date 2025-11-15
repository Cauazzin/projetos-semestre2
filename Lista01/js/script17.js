//Exercicío 17 - Média idades

let nome1 = prompt("Digite o nome da primeira pessoa:");
let idade1 = prompt("Digite a idade da primeira pessoa:");

let nome2 = prompt("Digite o nome da segunda pessoa:");
let idade2 = prompt("Digite a idade da segunda pessoa:");

let nome3 = prompt("Digite o nome da terceira pessoa:");
let idade3 = prompt("Digite a idade da terceira pessoa:");

let media = (Number(idade1) + Number(idade2) + Number(idade3)) / 3;

alert("A média das idades de " + nome1 + ", " + nome2 + " e " + nome3 + " é " + media.toFixed(1));
