let funcionario = {
    email: 'email@email.com'
};

let proxyFuncionario = new Proxy (funcionario, {
    set(target, prop, value, receiver) {
      console.log(`Valor antigo ${target[prop]}, valor atual: ${value}`);
      return Reflect.set(target, prop, value, receiver);
    }
});

proxyFuncionario.email = 'estevao@email.com';
