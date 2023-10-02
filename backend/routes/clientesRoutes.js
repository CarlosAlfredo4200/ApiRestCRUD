import express from "express";
const router = express.Router();

import {
  CrearCliente,
  MostrarClientes,
  BuscarCliente,
  ActualizarCliente,
  EliminarCliente
} from "../controllers/clienteControllers.js";


router.post("/clientes", CrearCliente);
router.get("/clientes", MostrarClientes);
router.get("/clientes/:id", BuscarCliente);
router.put("/clientes/:id", ActualizarCliente);
router.delete("/clientes/:id", EliminarCliente);

export default router;
