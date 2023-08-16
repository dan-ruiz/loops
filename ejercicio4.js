const prompt = require("prompt-sync")({ sigint: true });

let numero = parseInt(prompt("Ingrese un numero: "));
let factorial = 1;

for (let i = 1; i <= numero; i++) {
  factorial *= i;
}

console.log(factorial);