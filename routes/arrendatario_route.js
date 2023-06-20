const express = require("express");
const router = express.Router();
router.use(express.json());

const controller_Arrendatario = require ("../controllers/controller_Arrendatario");


//forma de hacer una ruta
//localhost:4000/arrendatarios/
router.get('/arrendatarios/:id', controller_Arrendatario.mostrar); 
router.post('/arrendatarios', controller_Arrendatario.asignar);
router.delete('/arrendatarios', controller_Arrendatario.eliminar);

module.exports = router;