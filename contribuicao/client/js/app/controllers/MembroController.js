class MembroController {
  constructor() {
    let $ = document.querySelector.bind(document);
    this.inputNome = $('#nome');
    this.inputEmail = $('#email');

    this._membrosView = new MembrosView($('#membrosView'));
    this._membrosView._update();
    this._membroForm = new MembroFormView($('#membroFormView'));
    this._membroForm._update();
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
