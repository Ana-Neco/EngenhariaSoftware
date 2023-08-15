
//Solicita a entrada do usuario
let numero = prompt("Digite um número inteiro positivo")

if(!isNaN(numero))
{
    if(numero >= 0)
    {
        if(numero == 0 || numero == 1)
        {
            alert(1)
        }
        else
        {
            let resultado = numero;
            for(let fat = 1; fat < numero; fat++)
            {
                resultado = resultado * fat
            }
            alert(resultado)
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
