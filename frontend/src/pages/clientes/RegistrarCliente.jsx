import { useState } from "react";
import { Link, Form } from "react-router-dom";

import axios from 'axios';

 
 const baseURL = import.meta.env.VITE_BACKEND;

const RegistrarCliente = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [email, setEmail] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [password, setPassword] = useState("");
  const [telefono, setTelefono] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");
  const [alerta, setAlerta] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, apellido,edad, email,empresa, password, telefono, repetirPassword].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    if (password !== repetirPassword) {
      setAlerta({
        msg: "Los password no son iguales",
        error: true,
      });
      return;
    }

    if (password.length < 6) {
      setAlerta({
        msg: "El Password es muy corto, agrega minimo 6 caracteres",
        error: true,
      });
      return;
    }

    setAlerta({});

    // Crear el usuario en la API
    try {
      const { data } = await axios.post( `${baseURL}/clientes`, {
        nombre,
        apellido,
        edad,
        email,
        empresa,
        password,
        telefono
      });



      setAlerta({
        msg: data.msg,
        error: false,
      });

      setNombre("");
      setApellido("");
      setEdad("");
      setEmail("");
      setEmpresa("");
      setPassword("");
      setTelefono("");
      setRepetirPassword("");
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  const { msg } = alerta;

  return (
    <div className="containerRegistro">
      <h3>REGISTRO CLIENTES</h3>

      {msg && <Alerta alerta={alerta} />}

      <form className="constainerFormulario" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            type="text"
            placeholder="Tu Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="apellidos">Apellidos</label>
          <input
            id="apellidos"
            type="text"
            placeholder="Tu apellidos"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="edad">Edad</label>
          <input
            id="edad"
            type="number"
            placeholder="Tu edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>

        <div>
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>


        <div>
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="empresa"
          >
            Empresa
          </label>
          <input
            id="empresa"
            type="text"
            placeholder="Lugar de trabajo"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          />
        </div>

        <div>


        <div>
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="telefono"
          >
            Telefono
          </label>
          <input
            id="telefono"
            type="text"
            placeholder="Telefono"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>



          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de Registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password2"
          >
            Repetir Password
          </label>
          <input
            id="password2"
            type="password"
            placeholder="Repetir tu Password"
            value={repetirPassword}
            onChange={(e) => setRepetirPassword(e.target.value)}
          />
        </div>

        <input type="submit" value="Crear Cuenta" className="inputSubmit" />
      </form>
    </div>
  );
};

export default RegistrarCliente;
