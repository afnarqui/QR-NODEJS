var clientesModel = require('../../models/clientes/index.js')
const clientes = {}

clientes.post = (req, res, params ) => {
    clientesModel.post(req, res, req.query);
}

module.exports = clientes
