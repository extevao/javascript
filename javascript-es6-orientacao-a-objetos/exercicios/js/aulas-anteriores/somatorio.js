let numeros = [1,2,3,4];

soma(numeros);

function soma(numeros){

  let resultado = numeros.reduce((total, valor) => total * valor, 1);
  console.log(resultado);
}
