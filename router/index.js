var express = require('express')
var router = express.Router()
var mongoose = require('mongoose');
var clientes = require('../controllers/clientes')

router.post('/clientes', (req, res) => {
    clientes.post(req, res, req.query);
})

module.exports = router
