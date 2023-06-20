const express = require ("express");
const router = express.Router();

const RoutePropiedad = require("./propiedad_route");
const RoutePersona = require ("./persona_route");
const RoutePropietario = require ("./propietario_route");
const RouteArrendatario = require ("./arrendatario_route");

//arreglo que contiene las 4 rutas
const arrayRoutes = [];

arrayRoutes.push(RouteArrendatario);
arrayRoutes.push(RoutePersona);
arrayRoutes.push(RoutePropiedad);
arrayRoutes.push(RoutePropietario);

router.use(arrayRoutes);

module.default = arrayRoutes;
module.exports = router; 