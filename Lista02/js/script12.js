// ===================== 12. Código do produto =====================
let codigo = Number(prompt("12) Código do produto (1 a 3):"));
let qtd = Number(prompt("Quantidade comprada:"));
let preco;

if (codigo === 1) preco = 10;
else if (codigo === 2) preco = 20;
else if (codigo === 3) preco = 30;
else preco = 0;

alert("Total a pagar: R$ " + (preco * qtd));
