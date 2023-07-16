'use strict';

import {
  Model
} from 'sequelize';

interface UsuarioAttributes {
  id: number;
  nome: string;
  login: string;
  senha: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Usuario extends Model<UsuarioAttributes> 
    implements UsuarioAttributes{

    id!: number;
    nome!: string;
    login!: string;
    senha!: string;

    static associate(models: any) {
      Usuario.hasMany(models.carteira, { foreignKey: 'idUsuario',  as: 'carteira' })
    }
  };
  Usuario.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'usuario',
    timestamps: false
  },

  );
  return Usuario;
};