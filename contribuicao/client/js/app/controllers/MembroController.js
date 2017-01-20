class MembroController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._membroForm = new MembroFormView($('#membroFormView'));
    this._membroForm.update();
    this._inputNome = $('#nome');
    this._inputEmail = $('#email');

    this._membrosView = new MembrosView($('#membrosView'));
    this._membrosView.update();

  }

  adiciona(event){
    event.preventDefault();
    let membro =  this._criaMembro();
    this._membrosView.update()
  }

  _criaMembro(){
    return new Membro(this._inputNome.value, this._inputEmail.value);
  }
}
