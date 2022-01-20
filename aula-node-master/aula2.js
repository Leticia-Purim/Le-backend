// Funções


/*
    subrotina
    E -> P -> S
    
    Entrada -> Argumentos da função
    Saida -> retorno
*/

// escopo de função
var n1 = 4;
var n2 = 10;

var abc = "oi galera!"; // global

function soma(n1, n2)
{
    var abc = "Dentra da função";
    console.log(abc);

    var total = n1 + n2;

    function exibe(val)
    {
        console.log(abc);
    }

    exibe(total);

    return total;
}

var res = soma(n1, n2);
console.log(res);
console.log(abc);