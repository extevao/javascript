let funcionario = {email: 'abc@abc.com'};

let funcionarioProxy = new Proxy(funcionario, {
  get(target, prop, receiver){
    return '**' + Reflect.get(target, prop, receiver) + '**' ;
  }
});

console.log(funcionarioProxy.email);
