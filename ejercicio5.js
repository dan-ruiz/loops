const prompt = require("prompt-sync")({ sigint: true });

let userNumber = parseInt(prompt("Ingrese un numero: "));

let num1 = 0; 
let num2 = 1;
let num3 = num1;

function fibonacci(numero) {
  for(let i = 0; i <= (numero + 1); i++) {
    if (num1 <=  numero) {
      console.log(num1);

      num1 = num2;
      num2 = num1 + num3;
      num3 = num1;
    }
  }
}

fibonacci(userNumber); 

