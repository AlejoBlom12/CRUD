const modeloPropietario = require("../models/propietariosModel");

const Listado_Propietario = async () => {
    return await modeloPropietario.find();
};

module.exports = { Listado_Propietario };