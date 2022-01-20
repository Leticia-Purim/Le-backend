var { MongoClient } = require("mongodb");

var url_con = "mongodb+srv://admin:admin123@cluster0.la9oy.mongodb.net/agenda?retryWrites=true&w=majority";

// config de conexão
const client = new MongoClient(url_con, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// usando async await
async function conectar()
{
    await client.connect();

    return  client.db("agenda").collection("contatos");    
}

module.exports = conectar;
  
/*
    funções asincronas
    - callback -> dispara evento
    - promise -> apartir do ES6
    - async await -> faz a função ficar sincrona
*/

// faz a conexão com o servidor usando callback
// client.connect(function(erro, result)
// {
//     if (result != null)
//     {

//         // seleciona o BD e a collection
//         var col = client.db("agenda").collection("contatos");

//         // faz uma pesquisa na collection e imprime dados
//         col.find({}).toArray(function(erro, dados)
//         {
//             console.log(dados);
//             client.close();
//         });

//     }    

// });

// usando promise
// client.connect()
//     .then(function(erro, result)
//     {
//         if (result != null)
//         {
    
//             // seleciona o BD e a collection
//             var col = result.db("agenda").collection("contatos");
    
//             // faz uma pesquisa na collection e imprime dados
//             return col.find({}).toArray();
    
//         }    
    
//     })
//     .then(function(erro, dados)
//     {
//         console.log(dados);
//         client.close();
//     });




