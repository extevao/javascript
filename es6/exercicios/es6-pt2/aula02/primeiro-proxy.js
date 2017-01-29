class Funcionario {
    constructor(email = 'abc@abc.com') {
        this._email = email;
    }
    get email() {
        return this._email;
    }
}

let funcionario = new Proxy(new Funcionario, {
    get(target, prop, receiver) {
        console.log(`Lendo atributo: ${prop} da classe `);

        return target[prop];

    }
});

console.log(funcionario.email);
