const propiedades = require("../services/propiedad_services");

const addPropiedades = async function(req, res) {
    let propiedad = { 
        cve_catastral: req.body.cve_catastral, //body objeto js
        descripcion: req.body.descripcion,
        direccion: req.body.direccion
    };
    await propiedades.add(propiedad.cve_catastral, propiedad.descripcion, propiedad.direccion);
    await res.json("Proceso exitoso");
}

const mostrarPropiedades = async function(req, res) {
    let propiedad = await propiedades.readPropiedades();
    await res.json(propiedad);
}

const mostrar = async function(req, res) {
    let propiedad = { 
        id: req.params.id 
    };
    let datos = await propiedades.read(propiedad.id);
    await res.json(datos);

}
const eliminarPropiedades = async function(req, res) {
    let propiedad = { 
        id: req.params.id 
    };
    let datos = await propiedades.eliminaPropiedad(propiedad.id);
    await res.json(datos);

}

const modificar = async function(req, res) {
    let propiedad = {
         id: req.params.id, 
         cve_catastral: req.body.cve_catastral, 
         descripcion: req.body.descripcion,
         direccion: req.body.direccion 
        };
    let datos = await propiedades.modificarUno(propiedad.id, propiedad.cve_catastral, propiedad.descripcion, propiedad.direccion);
    await res.json(datos);

}

module.exports.addPropiedades = addPropiedades;
module.exports.modificar = modificar;
module.exports.mostrarPropiedades = mostrarPropiedades;
module.exports.eliminarPropiedades = eliminarPropiedades;
module.exports.mostrar = mostrar;