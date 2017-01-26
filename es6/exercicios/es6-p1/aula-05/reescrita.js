class Funcionario {

    constructor(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }
}

class Secretaria extends Funcionario {

    constructor(nome) {
        super(nome);
    }

    atenderTelefone() {
        console.log(`${this._nome} atendendo telefone` );
    }
}

let dobro = numeros.map(num => num * 2 );
let metade = numeros.map(num =>  num/2 );
let raiz = numeros.map(num => Math.sqrt(num));
