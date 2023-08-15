
//Solicita a entrada do usuario
let numero = prompt("Digite um número inteiro positivo")

if(!isNaN(numero))
{
    if(numero >= 0)
    {
        if(numero % 2 == 0)
        {
            alert("É PAR")
        }
        else
        {
            alert("É IMPAR")
        }
    }
    else
    {
        alert("Números negativos são inválidos")
    }
}
else
{
    alert("Informe um número")
}
