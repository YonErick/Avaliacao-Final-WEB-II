const express = require('express');
const http = require('http');

const routesapartamento = require('./api/routes/apartamentoRoutes.js');
const routesmoradorproprietario = require('./api/routes/moradorproprietarioRoutes.js');

require('./database/indexDb.js');

const app = express();

app.set('url', 'http://localhost:');
app.set('porta', 5007);

app.use(express.json());
app.use(routesapartamento);
app.use(routesmoradorproprietario);

http.createServer(app).listen(app.get('porta'), function() {
    console.log('\nServidor Rodando ' + app.get('url') + app.get('porta'));
});
