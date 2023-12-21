// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

import "./App.css";


export function loader() {

  return "Desde louder"
}



function App() {
  const data = useLoaderData();
  console.log(data);
   <>Clientes</>
}

export default App;
