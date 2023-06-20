const models = require('../models');

const add = async function(rfc, name) {

    const persona = await models.Persona.create({
        rfc: rfc,
        name: name,
        createdAt: new Date(),
        updateAt: new Date()

    });
    console.log(JSON.stringify(persona));
    return persona;
}


const eliminaPersona = async function(id) {

    const persona = await models.Persona.findByPk(id);
    const eliminado = persona;

    await persona.destroy(); //eliminar llave primaria
    return eliminado;
}

const readPersonas = async function() {
    let persona = await models.Persona.findAll({});
    return persona;
}
const read = async function(id) {
    const persona = await models.Persona.findByPk(id);
    return persona;
}

const modificarUno = async function(id, rfc, name) {
    const persona = await models.Persona.findByPk(id)

    await persona.update({
        rfc: rfc,
        name: name,
        updateAt: new Date()

    });
    return persona
}


module.exports.add = add;
module.exports.readPersonas = readPersonas;
module.exports.eliminaPersona = eliminaPersona;
module.exports.read = read;
module.exports.modificarUno = modificarUno;