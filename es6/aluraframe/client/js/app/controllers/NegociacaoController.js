class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        let self = this;
        this._listaNegociacoes =  ProxyFactory.create(
          new ListaNegociacoes(),
          ['adiciona', 'esvazia'],
          lista => this._negociacoesView.update(lista));

        this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem = ProxyFactory.create(
          new Mensagem(),
          ['texto'],
          mensagem => this_mensagemView.update(mensagem));
        this._mensagemView = new MensagemView($('#mensagemView'));

    }
    adiciona(event) {
        event.preventDefault();

        // let data = new Date(this._inputData.value.split('-'));
        // let data = new Date(this._inputData.value.replace(/-/g, ','));


        this._listaNegociacoes.adiciona(this._criaNegociacao());

        // this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);

        this._limpaFormulario();
    }

    apaga() {

        this._listaNegociacoes.esvazia();
        // this._negociacoesView.update(this._listaNegociacoes);

        this._mensagem.texto = "Negociações removidas com sucesso";
        this._mensagemView.update(this._mensagem);

    }

    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();

    }
}
