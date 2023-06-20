const arrendatarios = require("../services/arrendatario_services");


const asignar = async function(req, res) {
    let arrendatario = {
        PersonaId: req.body.PersonaId,
        PropiedadId: req.body.PropiedadId
    };
    await arrendatarios.add(arrendatario.PersonaId, arrendatario.PropiedadId);
    await res.json("Proceso exitoso");
}
const eliminar = async function(req, res) {
    let arrendatario = {
        PersonaId: req.body.PersonaId,
        PropiedadId: req.body.PropiedadId
    };
    let datos = await arrendatarios.borrar(arrendatario.PersonaId, arrendatario.PropiedadId);
    await res.json(datos);
}

const mostrar= async function(req, res) {
    let PersonaId = req.params.id;
    let datos = await arrendatarios.read(PersonaId);
    await res.json(datos);
}

module.exports.asignar = asignar;
module.exports.mostrar = mostrar;
module.exports.eliminar = eliminar;
