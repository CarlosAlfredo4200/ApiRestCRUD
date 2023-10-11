const express = require("express");
const router = express.Router();

const {
  CrearCliente,
  MostrarClientes,
  BuscarCliente,
  ActualizarCliente,
  EliminarCliente
} = require("../controllers/clienteControllers.js");


router.post("/clientes", CrearCliente);
router.get("/clientes", MostrarClientes);
router.get("/clientes/:id", BuscarCliente);
router.put("/clientes/:id", ActualizarCliente);
router.delete("/clientes/:id", EliminarCliente);

module.exports = router;
