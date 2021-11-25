const mysql = require('sync-mysql');
const bd = "clinica";

const config = {
    host:"localhost",
    user:"root",
    password:""
}


  const conexionmysql = (sql) => {
    console.log(sql);
      const connection = new mysql(config);
      let retorna = {code:500,data:"No hay data"};
      result = connection.query(sql)
        if(result !== undefined){
            retorna = result;
        }
      return retorna;
  }


  const queryConsultaCita = (data) => {
    let query = `select * from ${bd}.calendario where fecha >= '${data.fechainicial}' and fecha <= '${data.fechafinal}'` ;
    return conexionmysql(query);
}

const queryActualizaCita = (data) => {
    let query = `UPDATE ${bd}.calendario set fecha = '${data.fecha}', hora = '${data.hora}' where cod_calendario = ${data.cod_calendario}`;
    return conexionmysql(query);
}

const queryEliminacita = (data) => {
    let query = `DELETE FROM ${bd}.calendario where cod_calendario = ${data.cod_calendario}`;
    return conexionmysql(query);
}

const queryCreaCita = (data) => {
    let query = `insert into ${bd}.calendario (cod_sede,fecha,hora,cod_oficina,cod_usuario) values (${data.cod_sede},'${data.fecha}','${data.hora}',${data.cod_oficina},${data.cod_usuario})`;
    return conexionmysql(query);
}


const insertaUsuario = (data) => {
    let query = `insert into ${bd}.usuario (usuario,contrasena) values ('${data.usuario}','${data.contrasena}')`;
    return conexionmysql(query);
}

  module.exports = {queryConsultaCita,queryActualizaCita,queryEliminacita,queryCreaCita,insertaUsuario};