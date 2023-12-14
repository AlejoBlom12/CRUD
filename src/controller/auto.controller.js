const modeloAutos = require("../models/autosModel")
const { respuesta } = require("../Helpers/respuesta");
const { respuesta1 } = require("../Helpers/respuestaEdit");
const { respuestaE } = require("../Helpers/eliminar");


const controlador = {}


controlador.editarAuto = async ( req, res ) => {
  try {
  
    const id = req.params.id;
    const autoEdit = req.body; 
      
    const auto = await modeloAutos.findByIdAndUpdate({ _id: id }, { $set: autoEdit });
      
    respuesta1.status = "200"
    respuesta1.message = "Se ha editado con exito."
    respuesta1.principal = auto
    respuesta1.editado = autoEdit
  
    res.status(200).send(respuesta1);
      
  } catch (error) {
      console.error('Error al actualizar:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor', error: error.message });
  }
}



controlador.eliminarCarro = async (req , res) => {
  try {
    const idParam = req.params.id;
    const eliminado = await modeloAutos.findByIdAndDelete(idParam);

    respuestaE.status = "200";
    respuestaE.message = "Se ha eliminado con éxito.";
    respuestaE.Eliminado = eliminado;
    res.status(200).send(respuestaE);
  

  } catch (error) {
    console.error('Error al eliminar:', error);
    respuesta.status = "500";
    respuesta.message = "No se ha podido eliminar correctamente.";
    respuesta.data = error;
    res.status(500).send(respuesta);
  }
}


controlador.getAutos = async (req, res) => {
      const autos = await modeloAutos.find()
      res.json(autos)
}
controlador.getAutobyId = async (req, res) => {
      const  id = req.params.id
      const auto = await modeloAutos.findOne(id)
      res.json(auto)
}



controlador.saveAuto = async (req, res) =>{
  try{
    const body = req.body;
    const newAuto = new modeloAutos(body);
    await newAuto.save();
    
    respuesta.status = 200;
    respuesta.message = "El carro se ha guardado correctamente.";
    respuesta.data = body;

    res.status(200).send(respuesta);
    
  } catch (error) {
    const errorsCatch = error.errors;
    const errors = {};

    for (let i in errorsCatch) {
        errors[i] = errorsCatch[i].message;
      }
  
      respuesta.status = 500;
      respuesta.message = "Ocurrio un error, el carro no se ha guardado correctamente";
      respuesta.data = errors;
      
      res.status(500).send(respuesta);
    }
}


module.exports = controlador