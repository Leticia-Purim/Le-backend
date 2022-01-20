
/*
    cidade -> edadic
*/
var reverso = function (valor)
{
    
    var tam = valor.length - 1;
    var saida = "";

    while (tam >= 0)
    {
        saida = saida + valor.charAt(tam);
        tam = tam - 1;
    }

    return saida;

}

module.exports = reverso;
