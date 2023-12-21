const express = require("express");
const app = express();
app.use(express.json());

const routesClientes = require("./routes/clientesRoutes.js");
const routesProductos = require("./routes/productosRoutes.js");
const routesPedidos = require("./routes/pedidosRoutes.js");

app.use(express.static("uploads"));

require("dotenv").config();
const cors = require("cors");
const dbconnect = require("./config/db.js");
const helmet = require("helmet"); // Paquete para añadir encabezados de seguridad
const NODE_ENV = process.env.NODE_ENV || "development";
const port = process.env.PORT || 3000;
dbconnect();

// // Configurar CORS
// const whitelist = ["http://localhost:5173"];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.includes(origin)) {
//       // Puede consultar la API
//       callback(null, true);
//     } else {
//       // No esta permitido
//       callback(new Error("Error de Cors"));
//     }
//   },
// };

// app.use(cors(corsOptions));

// Añadir encabezados de seguridad con Helmet
app.use(helmet());

app.use("/", routesClientes);
app.use("/", routesProductos);
app.use("/", routesPedidos);

if (NODE_ENV !== "test") {
  app.listen(port, (req, res) => {
    console.log(`Escuchando en el puerto ${port}`);
  });
}


module.exports = app;