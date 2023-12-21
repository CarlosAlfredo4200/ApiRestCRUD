const app = require('./index');
const cors = require("cors");

const NODE_ENV = process.env.NODE_ENV || "development";
const port = process.env.PORT || 3000;

// Configurar CORS
const whitelist = ["http://localhost:5173"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      // Puede consultar la API
      callback(null, true);
    } else {
      // No está permitido
      callback(new Error("Error de Cors"));
    }
  },
};

app.use(cors(corsOptions));

// condiciones de networking
if (NODE_ENV !== "test") {
    app.listen(port, () => {
      console.log(`Escuchando en el puerto ${port}`);
    });
}
