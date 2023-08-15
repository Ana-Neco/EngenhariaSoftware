
//Solicita a entrada do usuario
let numero = prompt("Digite um número inteiro positivo")

if(!isNaN(numero))
{
    if(numero > 0)
    {
        let divisores = 0;
        for(let i = 1; i <= numero; i++)
        {
            if(numero % i == 0)
                divisores++;
        }
        if(divisores == 2)
        {
            alert("É número primo")
        }
        else
        {
            alert("Não é número primo")
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
