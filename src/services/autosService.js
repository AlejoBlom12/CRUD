const modeloAutos = require("../models/autosModel");

const Listado_Autos = async () => {
    return await modeloAutos.find();
};

module.exports = { Listado_Autos};