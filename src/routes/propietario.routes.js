const { Router } = require("express");
const routes = Router();
const { guardarPropietario, listaPropietario , editarPropietario, eliminarPropietario} = require('../controller/propietario.controller')

routes.get("/listaPropietario", listaPropietario);

routes.post("/guardandoPropietario", guardarPropietario);

routes.put("/editarPropietario/:id", editarPropietario);

routes.delete("/eliminarAuto/:id", eliminarPropietario);

module.exports = routes;