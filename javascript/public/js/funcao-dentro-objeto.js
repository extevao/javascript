// var pessoa = {
//   nome: "joão",
//   idade: 20,
//   getIdade: function(){
//     return this.idade;
//   }
// };
var getIdade = function(){
  return this.idade;
};

var pessoa = {
  nome: "joão",
  idade: 20,
  getIdade: getIdade
};

console.log(getIdade());
console.log(pessoa.getIdade());
