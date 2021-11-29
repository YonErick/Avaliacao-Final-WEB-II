'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable  ('apartamento', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      apt_edificio: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },

      apt_numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      apt_andar: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      apt_quartos: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      
      mor_codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'moradorpro',
          key: 'id'
        },
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
     await queryInterface.dropTable('apartamento');
  
  }
};