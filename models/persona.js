'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Persona.belongsToMany(models.Propiedad,{through: models.Propietarios, as: "propiedades"})
      models.Persona.belongsToMany(models.Propiedad,{through: models.Arrendatarios, as: "propiedadesA"})
    }
  }
  Persona.init({
    rfc: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persona',
  });
  return Persona;
};