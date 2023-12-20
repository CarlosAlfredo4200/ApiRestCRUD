import React from "react";
import ReactDOM from "react-dom/client";
import App, { loader as clientesLouder} from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "../store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./componets/Layout";
import Clientes from "./pages/Clientes";
import Productos from "./pages/Productos";
import Pedidos from "./pages/Pedidos";
import Home from "./pages/Home";
import RegistrarCliente from "./pages/RegistrarCliente";

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
