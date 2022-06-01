const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Skill extends Model {}

Skill.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    skill_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'skill',
  }
);

module.exports = Skill;
