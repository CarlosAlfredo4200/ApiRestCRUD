const express = require("express");
const router = express.Router();

const {
  CrearCliente,
  MostrarClientes,
  MostrarClientesMayoresEdad,
  MostrarClientesEdadesYApellido,
  BuscarCliente,
  ActualizarCliente,
  EliminarCliente
} = require("../controllers/clienteControllers.js");


router.post("/clientes", CrearCliente);
router.get("/clientes", MostrarClientes);
router.get("/clientes/mayores", MostrarClientesMayoresEdad);
router.get("/clientes/entre/:edadMinima/:edadMaxima/:apellido", MostrarClientesEdadesYApellido);
router.get("/clientes/:id", BuscarCliente);
router.put("/clientes/:id", ActualizarCliente);
router.delete("/clientes/:id", EliminarCliente);

module.exports = router;
