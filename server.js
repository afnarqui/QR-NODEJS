"use strict"
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var path = require('path')
var config = require('./config')
var router = require('./router')
var app = express()
var nodemailer = require('nodemailer');
var mongoose = require('mongoose')



/*
mongoose.Promise = global.Promise;

var db;

   db = mongoose.connect("mongodb://localhost:27017/prueba", {
        useMongoClient: true,
    });
    
    console.log("App escuchando en el puerto ");
mongoose.connection.on('connected', function () {
    console.log('Mongoose conexión predeterminada abierta a ');
});
*/

app.use(express.static('public'));
app.use(cors())
app.use(bodyParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use('/', router)


app.get('/reporte',function(req, res) {
    var pdf = require('html-pdf');
    var fs = require('fs');

    
    var html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Reporteador</title>
    </head>
    <body>
        <a id="reporte"></a>

     
        <img id="imagen" style="display:block;margin:auto" width=480px height=280px src="http://192.190.42.119/escarapela1.png">    

       <img id="imagen" style="display:block;margin:auto" width=400px height=540px src="http://192.190.42.119/escarapela2.jpg">    
    </body>
    </html>
    `

      var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', 
        port: 587,
        auth: {
            user: 'afnarqui9@gmail.com',
            pass: 'quintero1.' 
        }
    });
  
    pdf.create(html).toStream(function(err, stream){
      var mailOptions = {
        from: 'diana.gomezm22@gmail.com', 
        to: 'diana.gomezm22@gmail.com',
        subject: 'PDF',
        text: 'Invitación Pasantias 2017',
        attachments: [
          {   
              filename: 'invitacion.pdf',
              content: stream
          }],
       };

      transporter.sendMail(mailOptions,function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('mensaje: ' + info.response);
            res.json({yo: info.response});
        };
      });
        
    });
});
 
app.listen(config.port, () => console.log(` servidor corriendo por el puerto ${config.port}`))
