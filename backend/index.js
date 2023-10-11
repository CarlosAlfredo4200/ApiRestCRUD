const app = require("./app.js");
require('dotenv').config()
const cors = require("cors");
const dbconnect = require("./config/db.js");

const NODE_ENV = process.env.NODE_ENV || "development";
const port = process.env.PORT || 3000;
dbconnect();

// Configurar CORS
const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      // Puede consultar la API
      callback(null, true);
    } else {
      // No esta permitido
      callback(new Error("Error de Cors"));
    }
  },
};

app.use(cors(corsOptions));

if (NODE_ENV !== "test") {
  app.listen(port, (req, res) => {
    console.log(`Escuchando en el puerto ${port}`);
  });
}
 
