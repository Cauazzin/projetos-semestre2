// ===================== 8. Bônus salário =====================
let salario = Number(prompt("8) Digite seu salário:"));
let bonus = salario > 2000 ? salario * 0.1 : salario * 0.05;
alert("Seu bônus: R$ " + bonus.toFixed(2));
