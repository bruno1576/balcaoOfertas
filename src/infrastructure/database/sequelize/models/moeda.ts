'use strict';

import {
  Model
} from 'sequelize';

interface MoedaAttributes {
    id: number;
    idTipoMoeda: number;
    idCarteira: number;
    quantidade: number;
  
  }
  module.exports = (sequelize: any, DataTypes: any) => {
    class Moeda extends Model<MoedaAttributes> 
      implements MoedaAttributes{
      id!: number;
      idTipoMoeda!: number;
      idCarteira!: number;
      quantidade!: number;

    };
    
    Moeda.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    idTipoMoeda: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tipoMoeda',
        key: 'id'
      }, 
    },
    
    idCarteira: {
    type: DataTypes.INTEGER,
      references: {
        model: 'carteira',
        key: 'id'
      }, 
    },
    quantidade: {
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: true
    },
  },  {
    sequelize,
    modelName: 'moeda',
    timestamps: false
  });

  return Moeda;
};
