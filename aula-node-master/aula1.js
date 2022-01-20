
var fs = require("fs");

var nome = "Leticia"; // string
var idade = 29; // number integer
var peso = 12.3; // number float
var andando = false; // boolean

//console.log("Olá " + nome);

function oi() {
    console.log("Oi tudo bem?");
}

console.log("Antes da função");

// async 
fs.writeFile("turma.txt", "Olá " + nome, oi);

console.log("Depois da função");
