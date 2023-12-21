import React from "react";
import ReactDOM from "react-dom/client";
import App, { loader as clientesLouder} from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "../store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./componets/Layout";
import Clientes from "./pages/clientes/Clientes.jsx";
import Productos from "./pages/productos/Productos.jsx";
import Pedidos from "./pages/pedidos/Pedidos.jsx";
import Home from "./pages/Home.jsx";
import RegistrarCliente from "./pages/clientes/RegistrarCliente.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        index:true,
        element: <App />,
        loader: clientesLouder
      },
      {
        path: "/clientes",
        element: <Clientes />,
      },
      {
        path: "/clientes/nuevoCliente",
        element: <RegistrarCliente />,
      },
      {
        path: "/productos",
        element: <Productos />,
      },
      {
        path: "/pedidos",
        element: <Pedidos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />;
  </React.StrictMode>
);
