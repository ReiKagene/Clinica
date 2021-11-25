const express = require("express");
const router = express.Router();
const clinica = require("../controller/clinica");

router.post("/consultar_cita",clinica.consultarCita);
router.post("/elimina_cita",clinica.eliminaCita);
router.post("/actualiza_cita",clinica.actualizaCita);
router.post("/crea_cita",clinica.creaCita);
router.post("/crea_usuario",clinica.creaUsuario);

module.exports = router;

