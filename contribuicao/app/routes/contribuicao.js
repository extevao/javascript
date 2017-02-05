module.exports = function(app) {
    var api = app.api.contribuicao;
    app.route('/v1/contribuicoes')
        .get(api.lista);

    app.route('/v1/contribuicoes/:id')
        .get(api.buscaPorId);

}
