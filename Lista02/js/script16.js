// ===================== 16. Preço maçãs =====================
let qtdMacas = Number(prompt("16) Quantidade de maçãs:"));
let precoM = qtdMacas >= 12 ? 0.40 : 0.50;
alert("Total a pagar: R$ " + (qtdMacas * precoM).toFixed(2));
