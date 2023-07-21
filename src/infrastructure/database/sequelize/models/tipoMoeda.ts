'use strict';

import {
  Model
} from 'sequelize';

interface TipoMoedaAttributes {
    id: number;
    nome: string;

  
  }
  module.exports = (sequelize: any, DataTypes: any) => {
    class TipoMoeda extends Model<TipoMoedaAttributes> 
      implements TipoMoedaAttributes{
      id!: number;
      nome!: string;

    };
    
    TipoMoeda.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nome: {
        type: DataTypes.STRING(250),
        allowNull: false
    },

  },  {
    sequelize,
    modelName: 'tipoMoeda',
    timestamps: false
  });

  return TipoMoeda;
};
