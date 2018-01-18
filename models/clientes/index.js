var clientesModelo = require('./clientes')

var clientes = {}
var valornuevo =''


clientes.post = (req, res, params) => {

clientesModelo.findByIdclientes = (req, res, params) => {
    datos =JSON.parse(req.query.datos);
    var byId = datos.clientesId
            var nuevovalor = JSON.stringify(req.query.datos);
                 
            clientesModelo.findOne({clientesId:byId},function (err, post) {
                if (err) {
                    
                    console.log(err)
                }else{
                     
                    var results = new Object();
                    var nuevovalor = this.datos 
                     var uid ="";
                    if(post==null){
                         results.id = 0
                    }else{
                        results.id = post._id 
                        nuevovalor.archivo = results.archivo
                        nuevovalor.clientesId  = results.clientesId
                        nuevovalor.entidad = results.entidad
                        nuevovalor.nombre = results.nombre
                        nuevovalor.cedula = results.cedula
                        nuevovalor.correo = results.correo
                    } 
        
                        if(results.id == 0){
                        clientesModelo.create(nuevovalor, function (err, post) {
                            if (err){
                                
                                return next(err);
                            }else{
                                var valordatos = JSON.stringify(this.datos);
                                var valorarchivo = JSON.parse(valordatos)
                                
                            }
                        })                         
                        }else{
                         
                        clientesModelo.findByIdAndUpdate(results.id, nuevovalor, function (err, post) {
                            if (err){
                                 
                                return next(err);
                            }else{
                            var valordatos = JSON.stringify(this.datos);
                                                        } 
                        })}          
                     }
                 
            })
}
}

module.exports = clientes

