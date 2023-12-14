const modeloPropietario = require("../models/propietariosModel")
const { respuesta } = require("../Helpers/respuesta");
const { respuesta1 } = require("../Helpers/respuestaEdit");
const { respuestaE } = require("../Helpers/eliminar");


const controlador = {}

controlador.editarPropietario = async ( req, res ) => {

  try {
    const id = req.params.id;
    const propietarioEdit = req.body; 
      
    const propietario = await modeloPropietario.findByIdAndUpdate({ _id: id }, { $set: propietarioEdit });
      
    respuesta1.status = "200"
    respuesta1.message = "Se ha editado con exito."
    respuesta1.principal = propietario
    respuesta1.editado = propietarioEdit
  
    res.status(200).send(respuesta1);
      
  } catch (error) {
      console.error('Error al actualizar:', error);
      res.status(500).json({ mensaje: 'Error interno del servidor', error: error.message });
  }
}


controlador.eliminarPropietario = async (req , res) => {
  try {
    const idParam = req.params.id;
    const eliminado = await modeloPropietario.findByIdAndDelete(idParam);

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


controlador.listaPropietario = async (req, res) => {
      const propietarios = await modeloPropietario.find()
      res.json(propietarios)
}


controlador.guardarPropietario = async (req, res) =>{
  try{
    const body = req.body;
    const newPropietario = new modeloPropietario(body);
    await newPropietario.save();
    
    respuesta.status = 200;
    respuesta.message = "El propietario se ha guardado correctamente.";
    respuesta.data = body;

    res.status(200).send(respuesta);
  } catch (error) {
    const errorsCatch = error.errors;
    const errors = {};

    for (let i in errorsCatch) {
        errors[i] = errorsCatch[i].message;
      }
  
      respuesta.status = 500;
      respuesta.message = "Ocurrio un error, el propietario no se ha podido guardar.";
      respuesta.data = errors;
      
      res.status(500).send(respuesta);
    }
}


module.exports = controlador