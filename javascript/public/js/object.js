console.clear();
var pessoa = {
  nome: 'João',
  idade: 20,
  telefone: '9999-9999',
  endereco: {
    logradouro: 'Av. Brasil',
    numero: 70,
    bairro: 'Centro'
  }
};

for(var propriedade in pessoa){
  console.log(propriedade + " " + pessoa[propriedade] );
}
// console.log(pessoa);
