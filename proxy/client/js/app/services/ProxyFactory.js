class ProxyFactory{
  static create(objeto, props, acao){
    return new Proxy( objeto, {
        get: function(target, prop, receiver) {

            if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
                return function() {
                    console.log(`Método chamado: ${prop}`);
                    Reflect.apply(target[prop], target, arguments);
                    return acao(target);
                }
            }
            // só executa se não for função
            return Reflect.get(target, prop, receiver);
        }
    });
  }

  static _ehFuncao(funcao){
    return typeof(funcao) == typeof(Function);
  }
}
