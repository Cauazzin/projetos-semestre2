// ===================== 13. Aposentadoria =====================
let idadeApos = Number(prompt("13) Digite sua idade:"));
let sexo = prompt("Sexo (M ou F):").toUpperCase();
if ((sexo === "M" && idadeApos >= 65) || (sexo === "F" && idadeApos >= 60))
    alert("Pode se aposentar.");
else
    alert("Não pode se aposentar.");