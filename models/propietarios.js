'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Propietarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Propietarios.init({
    personaId: DataTypes.INTEGER,
    propiedadId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Propietarios',
  });
  return Propietarios;
};