const express = require("express");
const router = express.Router();
 


const {
      
    CrearPedido,
    MostrarPedidos,
    BuscarPedido,
    ActualizarPedido,
    EliminarPedido
} = require ("../controllers/pedidosControllers.js");


 
router.post("/pedidos", CrearPedido);
router.get("/Pedidos", MostrarPedidos);
router.get("/Pedidos/:id", BuscarPedido);
router.put("/Pedidos/:id", ActualizarPedido);
router.delete("/Pedidos/:id", EliminarPedido);

module.exports = router;
