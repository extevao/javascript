class Funcionario{
  constructor(email){
    this._email = email;
  }
  get email(){
    return this._email;
  }
  set email(email){
    this._email = email;
  }
}

let funcionario = new Proxy(new Funcionario('funcionario@email.com'), {
  get(target, prop, receiver){
    console.log('Armadilhar congelante!');
    console.log(prop);
    return Reflect.get(target, prop, receiver);
  }
});

console.log(funcionario.email);
