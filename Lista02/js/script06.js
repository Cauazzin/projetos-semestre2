// ===================== 6. Média de três notas =====================
let n1 = Number(prompt("6) Nota 1:"));
let n2 = Number(prompt("Nota 2:"));
let n3 = Number(prompt("Nota 3:"));
let media = (n1 + n2 + n3) / 3;
if (media >= 7) alert("Aprovado. Média: " + media);
else alert("Reprovado. Média: " + media);