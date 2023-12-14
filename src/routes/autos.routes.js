const { Router } = require("express");
const routes = Router();
const { getAutos, saveAuto, getAutobyId, editarCarro, eliminarCarro  } = require('../controller/auto.controller')

routes.get("/listaAutos", getAutos);

routes.post("/guardandoAuto", saveAuto);

routes.get("/obtenerAuto/:id", getAutobyId);

routes.put("/editarAuto/:id", editarCarro);

routes.delete("/eliminarAuto/:id", eliminarCarro);

module.exports = routes;
