const { Model, DataTypes } = require('sequelize');

class Apartamento extends Model{
    static init(sequelize){
        super.init({
            apt_edificio: DataTypes.STRING(20),
            apt_numero: DataTypes.INTEGER,
            apt_andar: DataTypes.INTEGER,
            apt_quartos: DataTypes.INTEGER,
            mor_codigo: DataTypes.INTEGER
        },{
            sequelize,
            tableName: 'apartamento',
        }

        );
        return this;
    }
}

module.exports = Apartamento;