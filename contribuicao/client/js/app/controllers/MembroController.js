class MembroController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._membroForm = new MembroFormView($('#membroFormView'));
        this._membroForm.update();

        this._inputNome = $('#nome');
        this._inputEmail = $('#email');

        let self = this; // guarda em uma variável o valor de this
        this._listaMembros = new Proxy(new ListaMembros(), {
            get(target, prop, receiver) {
                if (['adiciona', 'esvazia'].includes(prop) && typeof(target[prop]) === typeof(Function)) {
                    return function() {
                        Reflect.apply(target[prop], target, arguments);
                        self._membrosView.update(target);
                    }
                }
                return Reflect.get(target, prop, receiver);
            }
        });
        // this._listaMembros = new ListaMembros(model => this._membrosView.update(model));

        this._membrosView = new MembrosView($('#membrosView'));
        this._membrosView.update(this._listaMembros);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));

    }

    adiciona(event) {

        event.preventDefault();
        this._listaMembros.adiciona(this._criaMembro());


        // this._membrosView.update(this._listaMembros);

        this._mensagem.texto = 'Membro cadastrado com sucesso.';
        this._mensagemView.update(this._mensagem);
        this._limpaFormulario();
    }

    _criaMembro() {
        return new Membro(this._inputNome.value, this._inputEmail.value);
    }

    _limpaFormulario() {
        this._inputNome.value = "";
        this._inputEmail.value = "";

        this._inputNome.focus();
    }

    apaga() {
        //esvazia a lista de membros
        this._listaMembros.esvazia();

        //atualiza view com a lista vazia
        // this._membrosView.update(this._listaMembros);

        //exibe mensagem
        this._mensagem.texto = 'Lista de membros esvaziada com sucesso.';
        //atualiza view com a nova mensagem
        this._mensagemView.update(this._mensagem);

    }
}
