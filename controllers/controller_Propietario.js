const propietarios = require("../services/propietario_services");


const asignar = async function(req, res) {
    let propietario = {
        PersonaId: req.body.PersonaId,
        PropiedadId: req.body.PropiedadId
    };
    await propietarios.add(propietario.PersonaId, propietario.PropiedadId);
    await res.json("Proceso exitoso");
}
const eliminar = async function(req, res) {
    let propietario = {
        PersonaId: req.body.PersonaId,
        PropiedadId: req.body.PropiedadId
    };
    let datos = await propietarios.borrar(propietario.PersonaId, propietario.PropiedadId);
    await res.json(datos);
}

const mostrar= async function(req, res) {
    let PersonaId = req.params.id;
    let datos = await propietarios.read(PersonaId);
    await res.json(datos);
}

module.exports.asignar = asignar;
module.exports.mostrar = mostrar;
module.exports.eliminar = eliminar;
