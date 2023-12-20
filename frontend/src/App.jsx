// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import "./App.css";

<<<<<<< HEAD
 

import axios from "axios";
import RegistrarCliente from "./pages/RegistrarCliente";

export function loader() {

  return "Desde louder"
}


=======
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
>>>>>>> a90c92cb67c4af1095a5a487678c6a44a1fb0cb9

function App() {
  const data = useLoaderData();
  console.log(data);
   <>Clientes</>
}

export default App;
