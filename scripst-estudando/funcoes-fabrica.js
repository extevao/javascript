//Funções Construtoras vs. Funções Fábrica

//Funções Fábrica

var criarPessoa = function (nome, idade){
	return{
		nome: nome,
		idade: idade
	};
};

console.log(criarPessoa("Pedro", 20));
console.log(criarPessoa("Estevão", 30));