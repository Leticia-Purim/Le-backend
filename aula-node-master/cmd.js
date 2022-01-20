// Programa linha de comando

const readline = require('readline');

//configurando o modulo
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


// processa o valor digitado
var leitor = function(digitado)
{
    if (digitado == "sair")
    {
        rl.close();
    } else 
    {    
        console.log("Olá "+ digitado);
        // leitor é uma função recursiva
        rl.question("Digite seu nome: ", leitor);
    }

}

  // lê o texto digitado
  rl.question("Digite seu nome: ", leitor);