var peso = Number(prompt("Digite o seu peso:"));
var altura = Number(prompt("Digite a sua altura:"));
var imc = peso / (altura * altura);
alert("O seu IMC é igual a " + imc.toFixed(2));
