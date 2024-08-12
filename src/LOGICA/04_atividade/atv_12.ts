function verificarDivisibilidade(numero: number): void {
  if (numero % 3 === 0 && numero % 5 === 0) {
    alert("O número é divisível por 3 e por 5 ao mesmo tempo");

  } else {
    alert("O número não é divisível por 3 e por 5 ao mesmo tempo");
    
  }
}

const numeroInteiro: number = Number(prompt("Escreva um número inteiro"));
verificarDivisibilidade(numeroInteiro);