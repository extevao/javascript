//calcula-imc.js

var tr = document.getElementsByClassName('paciente');
console.log(tr);
var peso = 100;
var altura = 0;


if(altura != 0){
    var imc = peso / (altura * altura);
    console.log(imc);
} else{
    console.log("Não posso executar uma divisão por 0!");
}
