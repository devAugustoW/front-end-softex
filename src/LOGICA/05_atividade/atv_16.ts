// 16. Elabore um programa que calcule a média de 5 notas digitadas pelo usuário.

let notas: number[] = [];

for (let i = 0; i < 5; i++) {
  let nota = Number(prompt("Digite a nota " + (i+1) + ":"));
  notas.push(nota);
}

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}

let media = soma / notas.length;

console.log("A média das notas é:", media);