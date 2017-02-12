class ProxyFactory {
    static create(objeto, props, acao) {
        return new Proxy(objeto, {
            get: function(target, prop, receiver) {

                if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
                    return function() {
                        console.log(`Método chamado: ${prop}`);
                        let retorno = Reflect.apply(target[prop], target, arguments);
                        acao(target);
                        return retorno;
                    }
                }
                // só executa se não for função
                return Reflect.get(target, prop, receiver);
            },
            set(target, prop, value, receiver) {
                let retorno = Reflect.set(target, prop, value, receiver);
                if (props.includes(prop)) {
                    acao(target);
                }
                return retorno;
            }
        });
    }

    static _ehFuncao(funcao) {
        return typeof(funcao) == typeof(Function);
    }
}
