// ===================== 10. Ordem crescente =====================
let x = Number(prompt("10) Número 1:"));
let y = Number(prompt("Número 2:"));
let z = Number(prompt("Número 3:"));
alert("Ordem crescente: " + [x, y, z].sort((a, b) => a - b));
