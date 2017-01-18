class CadastroMembroController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this.inputNome = $('#nome');
    this.inputEmail = $('#email');

  }

  adiciona(event){
    event.preventDefault();
    let membro =  new Membro(this.inputNome.value, this.inputEmail.value);
    console.log(membro);
  }

  criaMembro(){
    return new Membro(this.inputNome.value, this.inputEmail.value);
  }
}
