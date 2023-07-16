'use strict';

import {
  Model
} from 'sequelize';

interface MoedaAttributes {
    id: number;
    idTipoMoeda: number;
    idCarteira: number;
    quantidade: string;
  
  }
  module.exports = (sequelize: any, DataTypes: any) => {
    class Moeda extends Model<MoedaAttributes> 
      implements MoedaAttributes{
      id!: number;
      idTipoMoeda!: number;
      idCarteira!: number;
      quantidade!: string;
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
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    
    idCarteira: {
    type: DataTypes.INTEGER,
      references: {
        model: 'carteira',
        key: 'id'
      }, 
      onDelete: 'cascade',
      onUpdate: 'cascade',
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
