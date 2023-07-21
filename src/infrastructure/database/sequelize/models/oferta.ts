'use strict';

import {
  Model
} from 'sequelize';

interface OfertaAttributes {
    id: number;
    idMoeda: number;
    ofertaAtiva: boolean;
    dataHora: Date;
    precoUnitario: number;
    quantidade: number;
  
  }
  module.exports = (sequelize: any, DataTypes: any) => {
    class Oferta extends Model<OfertaAttributes> 
      implements OfertaAttributes{
      id!: number;
      idMoeda!: number;
      ofertaAtiva!: boolean;
      dataHora!: Date;
      precoUnitario!: number;
      quantidade!: number;

    };
    
    Oferta.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    idMoeda: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ofertaAtiva: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    dataHora: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    precoUnitario: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    quantidade: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
  },  {
    sequelize,
    modelName: 'ofertas',
    timestamps: false
  });

  return Oferta;
};
