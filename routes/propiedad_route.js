const express = require("express");
const router = express.Router();
router.use(express.json());
const controller_Propiedad = require ("../controllers/controller_Propiedad");


//forma de hacer una ruta
//localhost:4000/personas/
router.get('/propiedades', controller_Propiedad.mostrarPropiedades); 
router.get('/propiedades/:id', controller_Propiedad.mostrar);
router.post('/propiedades', controller_Propiedad.addPropiedades);
router.delete('/propiedades/:id', controller_Propiedad.eliminarPropiedades);
router.put('/propiedades/:id', controller_Propiedad.modificar);

module.exports = router;