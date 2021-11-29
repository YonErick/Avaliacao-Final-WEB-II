const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const conexao = new Sequelize(dbConfig);

const apartamento = require('../api/models/apartamentoModels.js');
const moradorproprietario = require('../api/models/moradorproprietarioModels.js');

try {
    conexao.authenticate();
    console.log('Conexão estabelecida!!!');
} catch (error) {
    console.log('Conexão não estabelecida!!!', error);
}

apartamento.init(conexao);
moradorproprietario.init(conexao);

module.exports = conexao;