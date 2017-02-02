var express = require('express');
var app = express();


app.use(express.static('./public'));

app.get('/v1/membros', function(req, res){
  let membros = [
    {_id: 1, nome: 'Estevão Beethoven Lacerda Vasques', email: 'estevao@hotmail.com'},
    {_id: 2, nome: 'Fabio Machado da Rosa', email: 'fabio@hotmail.com'},
    {_id: 3, nome: 'Temer', email: 'temer@presidente.gov'}
  ];
  res.json(membros);
});


module.exports = app;
