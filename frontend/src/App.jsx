import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import "./App.css";

 

import axios from "axios";
import RegistrarCliente from "./pages/RegistrarCliente";

export function loader() {

  return "Desde louder"
}



function App() {
  const data = useLoaderData();
  console.log(data);
   <>Clientes</>
}

export default App;
