const modeloServicio = require("../models/servicioModel")
const { respuesta } = require("../Helpers/respuesta");
const { respuesta1 } = require("../Helpers/respuestaEdit");
const { respuestaE } = require("../Helpers/eliminar");


const controlador = {}

controlador.eliminarServicio = async (req , res) => {
  try {
    const idParam = req.params.id;
    const eliminado = await modeloServicio.findByIdAndDelete(idParam);

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

controlador.listadoServicio = async (req, res) => {
  try{

    const servicios = await modeloServicio.find()
    res.json(servicios)
  }catch(err){
    res.status(500).json({Error: error.message })
  }
}


controlador.guardarService = async (req, res) =>{
  try{
    const body = req.body;
    const newServicio = new modeloServicio(body);
    await newServicio.save();
    
    respuesta.status = 200;
    respuesta.message = "El servicio se ha guardado correctamente.";
    respuesta.data = body;

    res.status(200).send(respuesta);
  } catch (error) {
    const errorsCatch = error.errors;
    const errors = {};

    for (let i in errorsCatch) {
        errors[i] = errorsCatch[i].message;
      }
  
      respuesta.status = 500;
      respuesta.message = "Ocurrio un error, el servicio no se ha guardado correctamente";
      respuesta.data = errors;
      
      res.status(500).send(respuesta);
    }
}


module.exports = controlador