class Pessoa {

    constructor(nome) {
        this._nome = nome;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    grita(frase) {
        return `${this._nome} grita ${frase}`;
    }
}
// let pessoa = new Proxy(new Pessoa('Barney'), {
//
//     get(target, prop, receiver) {
//         if (prop == 'grita' && typeof(target[prop]) == typeof(Function)) {
//
//             return function() {
//                 console.log(`Interceptei o método: ${prop}, por isso estou exbindo essa mensagem!`);
//                 Reflect.apply(target[prop], target, arguments);
//             }
//         }
//         return Reflect.get(target, prop, receiver);
//     }
// });
//



let pessoa = new Proxy(new Pessoa('Barney'), {

    get(target, prop, receiver) {

        if (prop == 'grita' && typeof(target[prop]) == typeof(Function)) {

            return function() {

                console.log(`Interceptei o método: ${prop}, por isso estou exbindo essa mensagem!`);

                // aguarda o retorno em uma variável
                let retorno = Reflect.apply(target[prop], target, arguments);

                console.log(`O valor retornado do método foi ${retorno}`);

                return retorno; // retornando o resultado do método
            }
        }

        return Reflect.get(target, prop, receiver);
    }

});
console.log(pessoa.grita('Olá'));
