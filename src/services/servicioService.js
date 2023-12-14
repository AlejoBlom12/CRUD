const modeloServicio = require("../models/servicioModel");

const Listado_servicio = async () => {
    return await modeloServicio.find();
};

module.exports = { Listado_servicio };