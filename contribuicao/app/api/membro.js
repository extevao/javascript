var api = {};

api.lista = function(req, res) {
    let membros = [{
            _id: 1,
            nome: 'Estevão Beethoven Lacerda Vasques',
            email: 'estevao@hotmail.com'
        },
        {
            _id: 2,
            nome: 'Fabio Machado da Rosa',
            email: 'fabio@hotmail.com'
        },
        {
            _id: 3,
            nome: 'Temer',
            email: 'temer@presidente.gov'
        }
    ];
    res.json(membros);
}




module.exports = api;
