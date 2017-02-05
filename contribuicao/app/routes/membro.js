module.exports = function(app) {
    var api = app.api.membro;
    app.route('/v1/membros')
        .get(api.lista)
        .post(api.adiciona);

}
