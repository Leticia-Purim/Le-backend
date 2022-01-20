
var lib = require("./util.js");

console.log(lib);

var teste = lib("Cidade");
console.log(teste);

// ES6 ou ES2015
var nome = "leticia";


let abc = "abc";
const xyz = "xzy"; //não pode alterar depois de criado

let idade = 123;

// função anomima
let soma = function(n1, n2){
    return n1 + n2;
} 

// forma resumida de função
let outra = (n1, n2) => n1 + n2; 

//console.log( nome.length );

/*
    Programação Orientada a Objetos 
    
    função -> metodos -> function
    atributos -> propriedades -> variavel

    encapsulamento -> pacote

    molde -> classe

    instaciado -> criado em memoria

*/

// antes do ES6
var Pessoa = function(){
    this.nome = "Leticia";
}

// instancia de objeto
var leticia = new Pessoa();
leticia.nome = "Luizinho";

console.log(leticia);

// apartir do ES6
class Caneta 
{

    escrever()
    {
        console.log("escreveu no caderno");
    }

}

var bic = new Caneta();
bic.cor = "azul";

console.log(bic);

bic.escrever();

