import React, { useState, useEffect } from "react";
import axios from "axios";

const base = import.meta.env.VITE_BACKEND;
const Clientes = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const consultarAPI = async () => {
    try {
      const result = await axios.get(`${base}/clientes`);
      setUsers(result.data);
      setLoading(false);
    } catch (error) {
      console.error("Error al obtener datos:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    consultarAPI();
  }, []);

  // función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  // Método de filtrado
  let result = [];
  if (!search) {
    result = users;
  } else {
    result = users.filter((dato) =>
      Object.values(dato).some((value) => {
        if (typeof value === "number" && !isNaN(search)) {
          return value === parseInt(search);
        } else if (typeof value === "string") {
          return value.toLowerCase().includes(search.toLowerCase());
        }
        return false;
      })
    );
  }

  return (
    <div>
      <h2>CLIENTES</h2>
      <input
        type="text"
        placeholder="Search"
        className="my-form-control"
        value={search}
        onChange={searcher}
      />

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <table className="table table-striped table-hover shadow-lg">
          <thead>
            <tr className="encabezado">
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Edad</th>
              <th>Empresa</th>
              <th>Email</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            {result.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.nombre}</td>
                <td>{item.apellido}</td>
                <td>{item.edad}</td>
                <td>{item.empresa}</td>
                <td>{item.email}</td>
                <td>{item.telefono}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Clientes;
