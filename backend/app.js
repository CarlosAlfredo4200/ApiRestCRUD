const express = require("express");
const app = express();

const routesClientes = require("./routes/clientesRoutes.js");
const routesProductos = require("./routes/productosRoutes.js");
const routesPedidos = require("./routes/pedidosRoutes.js");

app.use(express.json());
app.use(express.static("uploads"));

app.use("/", routesClientes);
app.use("/", routesProductos);
app.use("/", routesPedidos);

module.exports = app;