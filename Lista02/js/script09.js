// ===================== 9. Dias do mês =====================
let mes = prompt("9) Digite um mês:").toLowerCase();
if (["janeiro","março","maio","julho","agosto","outubro","dezembro"].includes(mes))
    alert("31 dias");
else if (["abril","junho","setembro","novembro"].includes(mes))
    alert("30 dias");
else if (mes === "fevereiro")
    alert("28 dias (ou 29 em ano bissexto)");
else
    alert("Mês inválido");
