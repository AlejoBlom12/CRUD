
const { Schema, model} = require("mongoose");

const propietarioSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre del propietario es obligatorio."]
},    
  documento: {
    type: String,
    required: [true, "El documento es obligatorio."]
  },
  contacto: {
    type: String,
    required: [true, "La numero de contacto es obligatorio."]
  },
  direccion: {
    type: String,
    required: [true, "La direccion es obligatoria."]
  },
  carro: {
    type: Schema.Types.ObjectId,
    ref: 'autos',
    }
});

module.exports = model("Propietario", propietarioSchema, "Propietarios");