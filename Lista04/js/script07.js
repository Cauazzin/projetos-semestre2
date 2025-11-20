// 7) Média de 5 números
console.log("\n7) Média de 5 números:");
let nums = [10, 20, 30, 40, 50];
let somaMedia = 0;
for (let i = 0; i < nums.length; i++) somaMedia += nums[i];
console.log("Média =", somaMedia / nums.length);