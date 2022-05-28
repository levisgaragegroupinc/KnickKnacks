const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ProviderSkill extends Model {}

ProviderSkill.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    skill_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: 'skill',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'providerskill',
  }
);

module.exports = ProviderSkill;
