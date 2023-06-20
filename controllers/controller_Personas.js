const personas = require("../services/person_services");

const addPersona = async function(req, res) {
    let persona = { 
        rfc: req.body.rfc, //body objeto js
        name: req.body.name 
    };
    await personas.add(persona.rfc, persona.name);
    await res.json("Proceso exitoso");
}

const mostrarPersonas = async function(req, res) {
    let persona = await personas.readPersonas();
    await res.json(persona);
}
const mostrar = async function(req, res) {
    let persona = { 
        id: req.params.id 
    };
    let datos = await personas.read(persona.id);
    await res.json(datos);

}
const eliminarPersona = async function(req, res) {
    let persona = { 
        id: req.params.id 
    };
    let datos = await personas.eliminaPersona(persona.id);
    await res.json(datos);

}

const modificar = async function(req, res) {
    let persona = {
         id: req.params.id, 
         rfc: req.body.rfc, 
         name: req.body.name 
        };
    let datos = await personas.modificarUno(persona.id, persona.rfc, persona.name);
    await res.json(datos);

}

module.exports.addPersona = addPersona;
module.exports.modificar = modificar;
module.exports.mostrarPersonas = mostrarPersonas;
module.exports.eliminarPersona = eliminarPersona;
module.exports.mostrar = mostrar;