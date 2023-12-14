const express = require ('express')
const router = express.Router()
const upload = require('../middleware/MuterImage')

const { uploadImage } = require("../controller/uploadImageController")

router.post('/uploadSingleImage', upload.single("image"), uploadImage)


module.exports = router
