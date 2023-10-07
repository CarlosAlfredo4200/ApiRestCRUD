import express from "express";
const router = express.Router();
 


import {
      
    CrearPedido,
    MostrarPedidos,
    BuscarPedido,
    ActualizarPedido,
    EliminarPedido
} from "../controllers/pedidosControllers.js";


 
router.post("/pedidos", CrearPedido);
router.get("/Pedidos", MostrarPedidos);
router.get("/Pedidos/:id", BuscarPedido);
router.put("/Pedidos/:id", ActualizarPedido);
router.delete("/Pedidos/:id", EliminarPedido);

export default router;
