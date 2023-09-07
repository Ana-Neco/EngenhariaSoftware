// Classe Pessoa para armazenar os dados comuns de todas as pessoas
class Pessoa 
{
    constructor(nome, email, telFixo, telCel, dataNascimento) 
    {
        this.nome = nome;
        this.email = email;
        this.telFixo = telFixo;
        this.telCel = telCel;
        this.dataNascimento = dataNascimento;
    }
}
// Classe Professor que herda da classe Pessoa e adiciona atributos específicos de professores
class Professor extends Pessoa 
{
    constructor(nome, email, telFixo, telCel, dataNascimento, area, matricula, lattes) {
        super(nome, email, telFixo, telCel, dataNascimento);
        this.area = area;
        this.matriculaProfessor = matricula;
        this.lattes = lattes;
    }
}
// Classe Professor que herda da classe Pessoa e adiciona atributos específicos de aluno
class Aluno extends Pessoa {
    constructor(nome, email, telFixo, telCel, dataNascimento, curso, matriculaAluno) {
        super(nome, email, telFixo, telCel, dataNascimento);
        this.curso = curso;
        this.matriculaAluno = matriculaAluno;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastroForm");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const nome = form.nome.value;
        const email = form.email.value;
        const telFixo = form.telFixo.value;
        const telCel = form.telCel.value;
        const dataNascimento = form.dataNascimento.value;
        const tipo = document.querySelector('input[name="tipo"]:checked').value;

        let pessoa;
        
        let tipoDado = document.getElementById('tipoDado');

        if (tipo === "professor") {
            const area = form.area.value;
            const matricula = form.matricula.value;
            const lattes = form.lattes.value;

            pessoa = new Professor(nome, email, telFixo, telCel, dataNascimento, area, matricula, lattes);

            tipoDado.textContent = 'Professor';

        } else if (tipo === "aluno") {
            const curso = form.curso.value;
            const matriculaAluno = form.matriculaAluno.value;

            pessoa = new Aluno(nome, email, telFixo, telCel, dataNascimento, curso, matriculaAluno);
            
            tipoDado.textContent = 'Aluno';
        }

        let resultado = JSON.stringify(pessoa, null, 2);
        resultado = resultado.replace(/["{}]/g, '');
        document.getElementById('resultado').textContent = resultado;
        
    });

    form.addEventListener("change", function () {
        const tipo = document.querySelector('input[name="tipo"]:checked').value;

        if (tipo === "professor") {
            camposProfessor.style.display = "block";
            camposAluno.style.display = "none";
        } else if (tipo === "aluno") {
            camposProfessor.style.display = "none";
            camposAluno.style.display = "block";
        }

    });

        // // Remove apenas os campos de entrada anteriores
        // const camposAnteriores = formulario.querySelectorAll('input, label');
        // camposAnteriores.forEach(function (elemento) {
        //     elemento.remove();
        // });

    //     if (tipo === "professor") 
    //     {
    //         const areaLabel = document.createElement('label');
    //         areaLabel.textContent = "Área de Atuação";
    //         formulario.appendChild(areaLabel);

    //         const areaInput = document.createElement('input');
    //         areaInput.type = 'text';
    //         areaInput.name = 'area';
    //         formulario.appendChild(areaInput);

    //         const matriculaLabel = document.createElement('label');
    //         matriculaLabel.textContent = "Matrícula";
    //         formulario.appendChild(matriculaLabel);

    //         const matriculaInput = document.createElement('input');
    //         matriculaInput.type = 'text';
    //         matriculaInput.name = 'matricula';
    //         formulario.appendChild(matriculaInput);

    //         const lattesLabel = document.createElement('label');
    //         lattesLabel.textContent = "Lattes";
    //         formulario.appendChild(lattesLabel);

    //         const lattesInput = document.createElement('input');
    //         lattesInput.type = 'text';
    //         lattesInput.name = 'lattes';
    //         formulario.appendChild(lattesInput);

    //     } 

    //     else if (tipo.children[1]) 
    //     {

    //         const cursoLabel = document.createElement('label');
    //         cursoLabel.textContent = "Curso";
    //         formulario.appendChild(cursoLabel);

    //         const cursoInput = document.createElement('input');
    //         cursoInput.type = 'text';
    //         cursoInput.name = 'curso';
    //         formulario.appendChild(cursoInput);

    //         const matriculaLabel = document.createElement('label');
    //         matriculaLabel.textContent = "Matrícula";
    //         formulario.appendChild(matriculaLabel);

    //         const matriculaInput = document.createElement('input');
    //         matriculaInput.type = 'text';
    //         matriculaInput.name = 'matriculaAluno';
    //         formulario.appendChild(matriculaInput);

    //     }
    // });

});
