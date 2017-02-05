var api = {};
let contribuicoes = [{
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
}];

api.lista = function(req, res) {
    res.json(contribuicoes);
}

api.buscaPorId = function (req, res) {
  let contribuicao = contribuicoes.find(function(contribuicao){
    return contribuicao._id == req.params.id;
  });

  res.json(contribuicao);

}

module.exports = api;
