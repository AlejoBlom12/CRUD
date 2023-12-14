
const express = require('express')
const app = express();
const cors = require('cors');
const autosRoutes = require('../routes/autos.routes')
const servicioRoutes = require('../routes/servicio.routes')
const propietarioRoutes = require('../routes/propietario.routes')

const port = 3500;

app.use(cors());
app.use(express.json());
app.use(autosRoutes)
app.use(servicioRoutes)
app.use(propietarioRoutes)
app.use(require("../routes/UploadImage.routes"))

app.set("port", process.env.PORT || port);

module.exports = app;

