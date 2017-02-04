module.exports = function(app) {
    var api = app.api.contribuicao;
    app.get('/v1/contribuicoes', api.lista);

}
