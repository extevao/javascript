class Funcionario {
    constructor(email) {
        this._email = email;
    }

    get email() {
        return this._email;
    }
    set email(email) {
        this._email = email;
    }
}


let funcionario = new Proxy(new Funcionario('estevao@hotmail.com'), {
  set(target, prop, value, receiver){
    console.log(
      `Propriedade que está sendo alterada: ${prop} \n
      Valor: ${target[prop]} \n
      Novo valor: ${value}` );
      return Reflect.set(target, prop, value, receiver);
  }
});

funcionario.email = 'nv@email.com';
