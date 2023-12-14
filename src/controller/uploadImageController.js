

const controller = {}

controller.uploadImage = (req, res) =>{
    console.log(req.file)
    
    res.send("Se guardo exitosamente la imagen.")
}

module.exports = controller