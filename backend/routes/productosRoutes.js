import express from "express";
const router = express.Router();
import uploadMiddleware from '../helpers/handleStorage.js';


import {
      
    CrearProducto,
    MostrarProductos,
    BuscarProducto,
    ActualizarProducto,
    EliminarProducto
} from "../controllers/productosControllers.js";


router.post("/productos", uploadMiddleware.single('imagen'),  CrearProducto);
router.get("/productos", MostrarProductos);
router.get("/productos/:id", BuscarProducto);
router.put("/productos/:id", ActualizarProducto);
router.delete("/productos/:id", EliminarProducto);

export default router;
