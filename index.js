const express = require("express");
const app = express();
var server = require("http").Server(app);
const cors = require("cors");
const bodyParser = require("body-parser");




app.set("port",3000);
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/api/clinica/",require("./api/routes/clinica"));


server.listen(app.get("port"),()=>{
    console.log(`puerto abierto ${app.get("port")}`);
})