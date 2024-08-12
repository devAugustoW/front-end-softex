// 22. Elabore um programa que leia um número inteiro e exiba todos os seus divisores. 


let bic = Number(prompt("Digite um número inteiro:"));


for (let i = 1; i <= bic; i++) {
  if (bic % i === 0) {
    console.log(i); 

  }
  
}