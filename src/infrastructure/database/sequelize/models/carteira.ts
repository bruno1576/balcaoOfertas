'use strict';

import {
  Model
} from 'sequelize';

interface CarteiraAttributes {
  id: number;
  idUsuario: number;
  nome: string;

}

module.exports = (sequelize: any, DataTypes: any) => {
  class Carteira extends Model<CarteiraAttributes> 
    implements CarteiraAttributes{
    id!: number;
    idUsuario!: number;
    nome!: string;
  };
  
  Carteira.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      idUsuario: {
        type: DataTypes.INTEGER,
        references: {
          model: 'usuario',
          key: 'id'
        }
      },
      nome: {
        type: DataTypes.STRING(250),
        allowNull: false
      }
  }, {
    sequelize,
    modelName: 'carteira',
    timestamps: false
  });

  return Carteira;
};