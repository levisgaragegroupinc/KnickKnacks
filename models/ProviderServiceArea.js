const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class ProviderServiceArea extends Model {}

ProviderServiceArea.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    servicearea_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'servicearea',
        key: 'id',
        unique: false
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: false
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'providerservicearea',
  }
);

module.exports = ProviderServiceArea;