var http = require('http');
var app = require('./config/express');
require('./config/database')('localhost/contribuicao');

http.createServer(app).listen(3000, function(){
  console.log('Servidor iniado na porta 3000');
});
