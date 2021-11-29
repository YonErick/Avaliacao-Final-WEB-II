const { Model, DataTypes } = require('sequelize');

class MoradorProprietario extends Model{
    static init(sequelize){
        super.init({
            mor_nome: DataTypes.STRING(30),
            mor_apelido: DataTypes.STRING(10),
            mor_celular: DataTypes.STRING(15),
            mor_cpf: DataTypes.STRING(15),
        },{
            sequelize,
            tableName: 'moradorpro',
        }

        );
        return this;
    }
}

module.exports = MoradorProprietario;