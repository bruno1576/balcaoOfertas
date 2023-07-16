'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.createTable('usuarios', {
        id: {
          allowNull: false,
          autoIncrement: true,
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        nome: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: false
        },
        login: {
          allowNull: false,
          type: Sequelize.STRING
        },
        senha: {
          allowNull: false,
          type: Sequelize.STRING
        }
      }),

      queryInterface.createTable('carteiras', {
        id: {
          allowNull: false,
          autoIncrement: true,
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        idUsuario: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {model: 'usuarios', key: 'id'}
        },

        nome: {
          allowNull: false,
          type: Sequelize.STRING,
          unique: false
        },


       
      }),

      queryInterface.createTable('moedas', {
        id: {
          allowNull: false,
          autoIncrement: true,
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        idTipoMoeda: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {model: 'tipoMoedas', key: 'id'}
        },
        idCarteira: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {model: 'carteiras', key: 'id'}
        },
        quantidade: {
          allowNull: false,
          type: Sequelize.FLOAT,
          unique: false
        },

      }),
      queryInterface.createTable('tipoMoedas', {
        id: {
          allowNull: false,
          autoIncrement: true,
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        nome: {
          type: Sequelize.BOOLEAN
        },

      }),
      queryInterface.createTable('ofertas', {
        id: {
          allowNull: false,
          autoIncrement: true,
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        idMoeda: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {model: 'moedas', key: 'id'}
        },
        ofertaAtiva: {
          allowNull: false,
          type: Sequelize.BOOLEAN,
          unique: false
        },
        dataHora: {
          allowNull: false,
          type: Sequelize.DATE,
          unique: false
        },
        precoUnitario: {
          allowNull: false,
          type: Sequelize.FLOAT,
          unique: false
        },
        quantidade: {
          allowNull: false,
          type: Sequelize.FLOAT,
          unique: false
        },

      }),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.dropTable('usuarios'),
      queryInterface.dropTable('carteiras'),
      queryInterface.dropTable('moedas'),
      queryInterface.dropTable('tipoMoedas'),
      queryInterface.dropTable('ofertas'),
    ])
  }
}
