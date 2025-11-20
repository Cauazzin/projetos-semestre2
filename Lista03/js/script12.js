// ===================== 12. Ímpares até 50 =====================
let imp = 1;
let textoImp = "";

while (imp <= 50) {
    if (imp % 2 !== 0) textoImp += imp + " ";
    imp++;
}
console.log("12) Ímpares de 1 a 50:", textoImp);

