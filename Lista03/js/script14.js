// ===================== 14. Fatorial =====================
let numFat = Number(prompt("14) Digite um número:"));
let f = 1;
let fat = 1;

while (f <= numFat) {
    fat *= f;
    f++;
}
console.log("14) Fatorial de", numFat, "=", fat);

