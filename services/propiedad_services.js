const models = require('../models');

const add = async function(cve_catastral, descripcion, direccion) {

    const propiedad = await models.Propiedad.create({
        cve_catastral: cve_catastral,
        descripcion: descripcion,
        direccion: direccion,
        createdAt: new Date(),
        updateAt: new Date()
    });
    return propiedad;
}

const eliminaPropiedad = async function(id) {

    const propiedad = await models.Propiedad.findByPk(id);
    const eliminado = propiedad;

    await propiedad.destroy(); //eliminar llave primaria
    return eliminado;
}

const readPropiedades = async function() {
    let propiedad = await models.Propiedad.findAll({});
    return propiedad;
}
const read = async function(id) {
    const propiedad = await models.Propiedad.findByPk(id);
    return propiedad;
}

const modificarUno = async function(id, cve_catastral, descripcion, direccion) {
    const propiedad = await models.Propiedad.findByPk(id)

    await propiedad.update({
        cve_catastral: cve_catastral,
        descripcion: descripcion,
        direccion: direccion,
        updateAt: new Date()
    });
    return propiedad
}


module.exports.add = add;
module.exports.readPropiedades = readPropiedades;
module.exports.eliminaPropiedad = eliminaPropiedad;
module.exports.read = read;
module.exports.modificarUno = modificarUno;