const express = require("express");
const router = express.Router();
router.use(express.json());

const controller_Persona = require ("../controllers/controller_Personas");


//forma de hacer una ruta
//localhost:4000/personas/
router.get('/personas', controller_Persona.mostrarPersonas); 
router.get('/personas/:id', controller_Persona.mostrar);
router.post('/personas', controller_Persona.addPersona);
router.delete('/personas/:id', controller_Persona.eliminarPersona);
router.put('/personas/:id', controller_Persona.modificar);

module.exports = router;