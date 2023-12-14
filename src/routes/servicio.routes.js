const { Router } = require("express");
const routes = Router();
const { listadoServicio, guardarService, eliminarServicio } = require('../controller/servicioModel')

routes.get("/listaServicio", listadoServicio);

routes.post("/guardandoServicio", guardarService);

routes.delete("/eliminandoServicio/:id", eliminarServicio);

module.exports = routes;