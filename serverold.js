var express          = require('express'),
app              = express(),
bodyParser       = require('body-parser');
var nodemailer = require('nodemailer');
app.use(bodyParser());
app.use(express.static('public'));


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

     
        <img id="imagen" width=100% height=293 src="http://192.190.42.119/certificadoArriba.png">    
       </br>
       <p><p>aca el nombre de la persona</p></p>

       <img id="imagen" width=100% height=293 src="http://192.190.42.119/certificadoArriba.png">    
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
        from: 'afnarqui@hotmail.com', 
        to: 'afnarqui9@gmail.com',
        subject: 'PDF',
        text: 'holaaa node cuerpo!!!',
        attachments: [
          {   
              filename: 'documento.pdf',
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
 
app.listen(80,function(){
console.log('ejecutando...');
})

