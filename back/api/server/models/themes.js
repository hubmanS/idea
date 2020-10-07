'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Themes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Themes.init({
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Themes',
  });
  return Themes;
};