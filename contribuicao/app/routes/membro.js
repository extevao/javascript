module.exports = function(app) {
    var api = app.api.membro;
    app.get('/v1/membros', api.lista);

}
