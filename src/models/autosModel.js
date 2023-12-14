const { Schema, model} = require("mongoose");

const autoSchema = new Schema({
  nombreAuto: {
    type: String,
    required: [true, "Importante especificar que auto es."]
},    
  modelo: {
    type: String,
    required: [true, "El modelo es obligatorio."]
  },
  placa: {
    type: String,
    required: [true, "La placa es obligatoria."]
  }
});

module.exports = model("auto", autoSchema, "autos");
