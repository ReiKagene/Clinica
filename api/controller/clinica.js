const conexionClinica = require("../model/clinica");
const UserRegistry = require("./UserRegistry");

const consultarCita = (req,res) => {
    let data =  conexionClinica.queryConsultaCita(req.body);
    console.log(data);
    res.json({"fechas":data});

}

const eliminaCita = (req,res) =>{
    let data = conexionClinica.queryEliminacita(req.body);
    res.json({"mensaje":data});
}

const actualizaCita = (req,res) => {
    let data = conexionClinica.queryActualizaCita(req.body);
    res.json({"mensaje": data});
}

const creaCita = (req,res) => {
    let data = conexionClinica.queryCreaCita(req.body);
    res.json({"mensaje":data});
}

const  creaUsuario = (req,res) => {
    let crearusuario = new UserRegistry();
    let resultado = crearusuario.Createuser(req.body);
    res.json({"mensaje":resultado});
}

module.exports = {consultarCita,eliminaCita,actualizaCita,creaCita,creaUsuario};