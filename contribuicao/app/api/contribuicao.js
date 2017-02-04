var api = {};

api.lista = function(req, res) {
    let membros = [{
            _id: 1,
            membro: {
                _id: 2,
                membro: 'Fabio Machado da Rosa',
                email: 'fabio@hotmail.com'
            },
            valor: 10,
            data: '2015-04-20'
        },
        {
            _id: 2,
            membro: {
                _id: 1,
                membro: 'Estevão Beethoven',
                email: 'estevao@hotmail.com'
            },
            valor: 5,
            data: '2016-05-04'
        }

    ];
    res.json(membros);
}

module.exports = api;
