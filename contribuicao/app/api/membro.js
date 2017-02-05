var mongoose = require('mongoose');
var api = {};
var model = mongoose.model('Membro');

api.adiciona = function(req, res) {
    model
        .create(req.body)
        .then(function(membro) {
            res.json(membro);
        }, function(error) {
            console.log(error);
            res.status(500).json(error);
        });
}
api.lista = function(req, res) {
    model
        .find({})
        .then(function(fotos) {
            res.json(fotos);
        }, function(error) {
            console.log(error);
            res.status(500).json(error);
        });
}




module.exports = api;
