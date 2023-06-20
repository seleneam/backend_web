const models = require('../models');

const add = async function(PersonaId, PropiedadId) {
    const persona = await models.Persona.findByPk(PersonaId);
    const propiedad = await models.Propiedad.findByPk(PropiedadId);

    await persona.addPropiedadesA(propiedad);
    return "Proceso exitoso";
};

const borrar = async function(PersonaId, PropiedadId) {
    const persona = await models.Persona.findByPk(PersonaId);
    const propiedad = await models.Propiedad.findByPk(PropiedadId);

    await persona.removePropiedadesA(propiedad);
    return "Propietario eliminado";
}

const read = async function(PersonaId) {
    const persona = await models.Persona.findByPk(PersonaId);
    const resultado = await persona.getPropiedadesA();
    return resultado;
}

module.exports.add = add;
module.exports.borrar = borrar;
module.exports.read = read;

