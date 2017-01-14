class Pessoa {

    constructor(nome) {
        this.nome = nome;
    }
}

function exibeNome() {
    alert(this.nome);
}

let pessoa = new Pessoa('Salsifufu');

exibeNome('Lampreia'); // PRIMEIRA CHAMADA <=============

exibeNome = exibeNome.bind(pessoa);

exibeNome(); // SEGUNDA CHAMADA <=============