'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable  ('moradorpro', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      mor_nome: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },

      mor_apelido: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },

      mor_celular: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },

      mor_cpf: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },

      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('moradorpro');
  }
};