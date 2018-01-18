var mongoose = require('mongoose')

var clientesSchema = new mongoose.Schema({
    clientesId: Number,
    entidad: String,
    nombre: String,
    cedula: Number, 
    correo: String,                           
})

module.exports = mongoose.model('clientes', clientesSchema)


