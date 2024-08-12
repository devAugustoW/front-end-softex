/*2. Crie um programa que receba a idade de uma pessoa e exiba se ela é maior de idade ou menor de
idade.*/

function verificarIdade(idade: number): void {
  if (idade >= 18) {
      console.log("Maior de idade");
  } else {
      console.log("Menor de idade");
  }
}

let idade1: number = Number(prompt("Insira sua idade"));
verificarIdade(idade1);