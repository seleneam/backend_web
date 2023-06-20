'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Arrendatarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Arrendatarios.init({
    PersonaId: DataTypes.INTEGER,
    PropiedadId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Arrendatarios',
  });
  return Arrendatarios;
};