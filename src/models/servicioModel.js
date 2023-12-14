const { Schema, model} = require("mongoose");

const servicioSchema = new Schema({
  nombreServicio: {
    type: String,
    required: [true, "El nombre del servicio es obligatorio."]
},    
  precio: {
    type: Number,
    required: [true, "El precio es obligatorio."]
  },
  descripcion: {
    type: String,
    required: [true, "La descripcion es obligatoria."]
  }
});

module.exports = model("Servicio", servicioSchema, "Servicios");