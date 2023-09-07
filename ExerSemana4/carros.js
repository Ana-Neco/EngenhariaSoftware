// Classe Carro para armazenar as características de um carro
class Carro {
	constructor(marca, modelo, ano, cor, kilometragem, valor_fipe) {
		this.marca = marca;
		this.modelo = modelo;
		this.ano = ano;
		this.cor = cor;
		this.kilometragem = kilometragem;
		this.valor_fipe = valor_fipe;
	}

    // Método para calcular quantos anos de utilização o veículo possui
	anosUtilizacao() {
		const anoAtual = new Date().getFullYear();
		return anoAtual - this.ano;
	}

	// Método para calcular o valor de mercado considerando a regra definida
	valorMercado() {
		if (this.kilometragem <= 30000) {
			return this.valor_fipe * 1.1;
		} else if (this.kilometragem <= 50000) {
			return this.valor_fipe * 1.0;
		} else {
			return this.valor_fipe * 0.9;
		}
	}

}
// Função para calcular quantos anos de utilização e valor de mercado o veículo possui e exibir o resultado
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cadastroForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const marca = document.getElementById("marca").value;
        const modelo = document.getElementById("modelo").value;
        const ano = parseInt(document.getElementById("ano").value);
        const cor = document.getElementById("cor").value;
        const kilometragem = parseInt(document.getElementById("kilometragem").value);
        const valor_fipe = parseInt(document.getElementById("valor_fipe").value);

        const carro = new Carro(marca, modelo, ano, cor, kilometragem, valor_fipe);

        const anosUtilizacao = carro.anosUtilizacao();
        const valorDeMercado = carro.valorMercado();

        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `Resultado:<br>Anos de Utilização: ${anosUtilizacao} anos<br>Valor de Mercado: R$ ${valorDeMercado.toFixed(2)}`;
    });

});


