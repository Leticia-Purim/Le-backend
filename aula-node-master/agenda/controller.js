var express = require("express");
var dbcon = require("./dbcon");

var objectId = require("mongodb").ObjectId;

// modulo de roteamento
var router = express.Router();

/* CRUD -> Model

    Create -> criar
    Read   -> ler
    Update -> atualizar
    Delete -> deletar

    MVC

*/ 



// rota index
// action
router.get('/', async function(request, response)
    {
        var coluna = "nome"

        if (request.query.col != null) 
        {
            coluna = request.query.col;
        } else 
        {
            coluna = nome = 1;
            // a mesma que
            // coluna.name = 1;
        }

        console.log("{"+coluna+": 1}");

        var con = await dbcon();
        var contatos = await con
            .find({})
            .sort({coluna: 1})
            .toArray();       

        response.render("index", {dados: contatos});
    }
);

// rota "/contato"
router.get('/contato', function(request, response)
    {

        var nome = null;

        if (request.query.nome != null) {
            nome = request.query.nome;
        }
        

        response.render("contato", {nome: nome});
    }
);

router.get('/cadastro', function(req, res)
{
    var contato = {
        nome: "",
        telefone: "",
        email: "",
        cidade: ""
    };

    res.render("cadastro", {dados: contato});
});

router.get('/editar', async function(request, response)
{

    var id = new objectId(request.query.id);
    var con = await dbcon();
    var contato = await con.findOne({_id: id})


    response.render("cadastro", {dados: contato});
});

// Salva o contato na base de dados
router.post("/salvar", async function(req, res)
{
    var form = req.body;
    

    if (form.nome == "")
    {
        form.erro = "O campo nome está vazio";
        res.render("cadastro", {dados: form});

    } else 
    {

        var con = await dbcon();

        if (form.id)
        {
            var id = new objectId(form.id);
            await con.replaceOne({_id: id}, form);
        } else 
        {
            var result = await con.insertOne(form);
        }

        res.redirect("/");
    }
});

module.exports = router;