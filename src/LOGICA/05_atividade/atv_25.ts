// 25.  Elabore um programa que leia um número inteiro e exiba a soma dos dígitos pares desse número.

let numeroInserido = Number(prompt('Digite um número inteiro:'));
let somar: number = 0;
let numeroString = numeroInserido.toString(); 

for (let i = 0; i < numeroString.length; i++) {

  const digito = Number(numeroString[i]); 

  if (digito % 2 === 0) {
    soma += digito; 

  }

}

console.log(`A soma dos dígitos pares de ${numeroInserido} é ${somar}.`);