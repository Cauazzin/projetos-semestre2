//Exercicio 04 - Lista 03

let contadora = 0
let acumuladora = 0

while (contadora<5) {
    let numero= parseInt(prompt("Digite um número: "))
    acumuladora=acumuladora+numero
    contadora++

}
let media = acumuladora/5
console.log("A média dos números digitados é :" +media)