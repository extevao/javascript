class MembroController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._membroForm = new MembroFormView($('#membroFormView'));
    this._membroForm.update();

    this._inputNome = $('#nome');
    this._inputEmail = $('#email');
    this._listaMembros = new ListaMembros();

    this._membrosView = new MembrosView($('#membrosView'));
    this._membrosView.update(this._listaMembros);

    this._mensagem = new Mensagem();
    this._mensagemView = new MensagemView($('#mensagemView'));

  }

  adiciona(event){
    event.preventDefault();
    this._listaMembros.adiciona(this._criaMembro());
    this._membrosView.update(this._listaMembros);

    this._mensagem.texto = 'Membro cadastrado com sucesso.';
    this._mensagemView.update(this._mensagem);
    this._limpaFormulario();
  }

  _criaMembro(){
    return new Membro(this._inputNome.value, this._inputEmail.value);
  }

  _limpaFormulario(){
    this._inputNome.value = "";
    this._inputEmail.value = "";

    this._inputNome.focus();
  }
}
