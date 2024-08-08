// 23. Desenvolva um programa que calcule a média de altura de 5 pessoas. 

let alturas: number[] = [];
let somaAlturas: number = 0;
let mediaAlturas = somaAlturas / alturas.length;

for (let i = 0; i < 5; i++) {
  let altura = Number(prompt("Digite a altura da pessoa " + (i + 1) + " em metros:"));
  alturas.push(altura);

}

for (let i = 0; i < alturas.length; i++) {
  somaAlturas += alturas[i];
}

console.log("A média das alturas é:", mediaAlturas, "metros");