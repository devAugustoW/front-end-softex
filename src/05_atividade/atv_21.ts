// 21. Faça um programa que exiba a soma dos dígitos de um número inteiro fornecido pelo usuário. 


let numberInserido = Number(prompt("Digite um número inteiro:"));

let digitos = numberInserido.toString().split("");

let sum = 0;
for (let digito of digitos) {
    sum += Number(digito);
}

console.log(`A soma dos dígitos de ${numberInserido} é ${sum}.`);