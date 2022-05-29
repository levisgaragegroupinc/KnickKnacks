const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class ServiceArea extends Model {}

ServiceArea.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'servicearea',
  }
);

module.exports = ServiceArea;
