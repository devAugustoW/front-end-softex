function compararNomes(primeiroNome: string, segundoNome: string): void {
  const primeiroNomeCaracteres = primeiroNome.length;
  const segundoNomeCaracteres = segundoNome.length;

  if (primeiroNomeCaracteres > segundoNomeCaracteres) {
    console.log("O primeiro nome possui mais caracteres");
  } else if (segundoNomeCaracteres > primeiroNomeCaracteres) {
    console.log("O segundo nome possui mais caracteres");
  } else {
    console.log("Os nomes possuem o mesmo número de caracteres");
  }
}

const primeiroNome: string = String(prompt("Digite um nome"));
const segundoNome: string = String(prompt("Digite outro nome"));
compararNomes(primeiroNome, segundoNome);