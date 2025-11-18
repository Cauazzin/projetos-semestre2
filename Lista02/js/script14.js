// ===================== 14. IMC =====================
let peso = Number(prompt("14) Peso (kg):"));
let altura = Number(prompt("Altura (m):"));
let imc = peso / (altura * altura);
let classificacao = "";

if (imc < 18.5) classificacao = "Magreza";
else if (imc < 25) classificacao = "Normal";
else if (imc < 30) classificacao = "Sobrepeso";
else classificacao = "Obesidade";

alert("IMC: " + imc.toFixed(2) + " - " + classificacao);