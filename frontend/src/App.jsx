// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Layout from "./componets/Layout";
// import Clientes from "./pages/Clientes";
import Productos from "./pages/Productos";
import Pedidos from "./pages/Pedidos";
import Home from "./pages/Home";

// import axios from "axios";
import LayoutClientesCRUD from "./componets/LayoutClientesCRUD";

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
        path: "/clientes",
        element: <LayoutClientesCRUD />,
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

function App() {
  return <RouterProvider router={router} />;
}

export default App;
