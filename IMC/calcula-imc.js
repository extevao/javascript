var pacientes = [];
var paciente = {};
var elementos = document.getElementsByClassName('paciente');

for (var i = 0; i < elementos.length; i++) {
    paciente.nome =elementos[i].querySelector('.info-nome').textContent;
    paciente.peso =elementos[i].querySelector('.info-peso').textContent;
    paciente.altura =elementos[i].querySelector('.info-altura').textContent;

    pacientes.push(paciente);

}
console.log(pacientes);



function functionName() {
    var pessoa = {
        nome: 'Pedro Silva',
        idade: 12,
        telfone: '9999-9999'
    };

    for (var propriedade in pessoa) {
        console.log(propriedade + " " + pessoa[propriedade]);
    }

}
