const express = require("express");
const router = express.Router();
router.use(express.json());

const controller_Propietario = require ("../controllers/controller_Propietario");


//forma de hacer una ruta
//localhost:4000/personas/
router.get('/propietarios/:id', controller_Propietario.mostrar); 
router.post('/propietarios', controller_Propietario.asignar);
router.delete('/propietarios', controller_Propietario.eliminar);

module.exports = router;