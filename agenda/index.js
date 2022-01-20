// importa o framework
var express = require("express");

// inclui o arquivo com as rotas 
var controller = require("./controller");

// start do framework
var app = express();

//Configura para ver o conteudo do POST
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

//configura a pasta "view" como a pasta de template
app.set("views", './view'); 
// configura o motor de template
app.set('view engine', 'ejs');


// manda o app usar o modulo
app.use(controller);

// start do servidor web
app.listen(3000, function()
    {
        console.log("Servidor foi startado");
    }
);
