import express from 'express';
import 'dotenv/config'
import dbconnect from './config/db.js';
import routesClientes from './routes/clientesRoutes.js';
import routesProductos from './routes/productosRoutes.js';
import routesPedidos from './routes/pedidosRoutes.js';

const app = express();
const port = 4000;
app.use(express.json());
app.use(express.static('uploads'));

app.use('/', routesClientes);
app.use('/', routesProductos);
app.use('/', routesPedidos);

dbconnect();
app.listen(port, (req,res) =>{
    console.log(`Escuchando en el puerto ${port}`);
})