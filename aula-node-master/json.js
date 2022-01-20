// JSON -> javascript object notation
// xml 

var nome = "Leticia";
var idade = 123;

var cidades = ["curitiba", "colombo", "pinhais"];

var pessoa = {
    nome: "Luiz",
    idade: idade,
    enderecos: cidades,
    
    acordar: function(){
        console.log("oi")
    }
};

pessoa.nome = "pedro";

// executa a função
pessoa.acordar();

console.log(JSON.stringify(pessoa));
//{"nome":"pedro","idade":123,"enderecos":["curitiba","colombo","pinhais"]}

//var json_entrada = '{"nome":"pedro","idade":123,"enderecos":["curitiba","colombo","pinhais"]}';
//console.log(json_entrada);