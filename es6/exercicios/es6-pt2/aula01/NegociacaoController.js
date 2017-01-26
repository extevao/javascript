class NegociacaoController {

    constructor() {

        // código anterior omitodo

        this._listaNegociacoes = new ListaNegociacoes(this, function(model) {

            this._negociacoesView.update(model);
        });
    }

    // código posterior omitido
}
