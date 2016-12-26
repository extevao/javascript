//Funções Construtoras vs. Funções Fábrica

//Funções Construtora

var Pessoa = function (nome, idade){
	this.nome = nome;
	this.idade = idade;
};

console.log(new Pessoa("Pedro", 20));
console.log(new Pessoa("Estevão", 30));