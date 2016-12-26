console.clear();
//Funções construtoras vs Funções Fábrica
// 1° Funções Fábrica

var criarPessoa = function(nome, idade){
  return{
    nome: nome,
    idade: idade
  };
};

console.log(criarPessoa("Pedro", 20));
console.log(criarPessoa("Maria", 234));



//Funções Construtoras

var Pessoa = function(nome, idade){
  this.nome = nome;
  this.idade = idade;
};

console.log(new Pessoa("Estevão", 21));
console.log(new Pessoa("Tiago", 25));


var pedro = {};
Pessoa.call(pedro, "Pedro", 20);
console.log(pedro);

var maria = {};
Pessoa.call(maria, "maria", 2320);
console.log(maria);
