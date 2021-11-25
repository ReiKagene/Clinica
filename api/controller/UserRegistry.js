const conexionClinica = require("../model/clinica");

class encriptador {

    encriptaBase64(contrasena){
        return Buffer.from(contrasena).toString('base64');
    }
}


module.exports = class UserRegistry {
 

    Createuser(params) {
         let encriptar = new encriptador();
         params.contrasena = encriptar.encriptaBase64(params.contrasena);
         conexionClinica.insertaUsuario(params);
    }

}
