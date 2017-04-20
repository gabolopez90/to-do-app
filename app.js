var express = require("express");
var app = express();
var todoController = require("/controllers/todoController.js");

//Configurando el template engine
app.set("view engine", "ejs");

//Mapear la dirección para los documentos estaticos
app.use(express.static("./public"));

//Activar controlador
todoController(app);

//Puerto de c9 para el servidor
app.listen(process.env.PORT);
console.log("listening on port "+process.env.PORT);