class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }
    adiciona(event) {
        event.preventDefault();


        // let data = new Date(this._inputData.value.split('-'));
        // let data = new Date(this._inputData.value.replace(/-/g, ','));


        let helper = new DateHelper();
    


        let negociacao = new Negociacao(
            helper.textoParaData(this._inputData.value),
            this._inputQuantidade,
            this._inputValor
        );


        console.log(negociacao);

        console.log(helper.dataParaTexto(negociacao.data));


    }
}
