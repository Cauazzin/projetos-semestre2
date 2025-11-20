// ===================== 10. Primeiros 20 Fibonacci =====================
let x1 = 0, x2 = 1;
let contFib = 1;
let fib20 = "";

while (contFib <= 20) {
    fib20 += x1 + " ";
    let temp = x1 + x2;
    x1 = x2;
    x2 = temp;
    contFib++;
}
console.log("Primeiros 20 Fibonacci:", fib20);

