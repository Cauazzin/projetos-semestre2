// ===================== 19. Pode votar? =====================
let idadeV = Number(prompt("19) Digite sua idade:"));
if (idadeV < 16) alert("Não pode votar.");
else if ((idadeV >= 16 && idadeV < 18) || idadeV > 70) alert("Voto facultativo.");
else alert("Voto obrigatório.");