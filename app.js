const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Cargar rutas
const cripto_routes = require("./routes/criptomoneda");

//rutas base
app.use("/api", cripto_routes);

module.exports = app;
