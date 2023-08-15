// Solicita a entrada do usuário
let dado = prompt("Digite uma informação que quiser");

// Verifica o tipo de dado
if(confirm("Quer ver o tipo de dado digitado? "))
{
    if(!isNaN(dado))
    {
        alert("Number")
    }
    else
    {
        alert("String")
    }
}
else
{
    alert("Obrigado por visitar esta página!")
}